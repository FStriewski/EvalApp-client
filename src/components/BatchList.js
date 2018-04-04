import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import LogInContainer from '../containers/LogInContainer';
import StudentListContainer from '../containers/StudentListContainer';
import BatchForm from './BatchForm'
import { fetchBatches, createBatch } from '../actions/batches'
import '../styles/style.css'

 class BatchContainer extends PureComponent {
    
//! Test functionality with string but needs to be date later on 
    static propTypes = {
         batches: PropTypes.arrayOf(PropTypes.shape({
             number: PropTypes.number.isRequired,
             startdate: PropTypes.string.isRequired,
             enddate: PropTypes.string.isRequired
         })).isRequired
     }

    componentWillMount = () => {
        this.props.fetchBatches()
    }


     createBatch = (batch) => {
         this.props.createBatch(batch)
     }


    render() {
        const { batches } = this.props
        
        return (       
            <div className="BatchContainer">
            <p>BatchContainer</p>
    
                <Link to={'/login'} component={LogInContainer}>Back</Link> 
               
                <BatchForm onSubmit={this.createBatch} />
                
                    <div className="list-group">
                        {batches.map( (batch, index) =>( 

                                <a href={"batches/" + batch.id} className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Batch {batch.number}</h5>
                                    </div>
                                    <p className="mb-1">Start: {batch.startdate}  --- End: {batch.enddate}</p>
                                </a>

                        ))}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        batches: state.batches
    }
}

export default connect(mapStateToProps, { fetchBatches, createBatch })(BatchContainer)

// export default BatchContainer

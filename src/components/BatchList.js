import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
//import BatchTile from '../components/BatchTile'
import LogInContainer from '../containers/LogInContainer';
import { fetchBatches } from '../actions/batches'
import '../styles/style.css'

 class BatchContainer extends PureComponent {

    componentWillMount() {
        this.props.fetchBatches()
    }
    
    handleClick(){
        alert(this.props.batch.number)
    }


    render() {
        const { batches } = this.props
        
        return (
            
            <div className="BatchContainer">
            <p>BatchContainer</p>
    
                <Link to={'/login'} component={LogInContainer}>Back</Link> 
                
                <div
                 style={{ display: "flex", flexDirection: 'column' }}> 


                {batches.map( (batch,index) =>( 
                        <div
                            key={index}
                            className="BatchTile"
                            onClick={this.handleClick}
                        >
                        <p>{batch.number}</p>
                        <p>Start: {batch.startdate} - End:{batch.enddate}</p>
                        </div>
                )

                )}
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

export default connect(mapStateToProps, { fetchBatches })(BatchContainer)

// export default BatchContainer

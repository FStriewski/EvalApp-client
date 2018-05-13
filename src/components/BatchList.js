import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BatchForm from './BatchForm'
import { fetchBatches, createBatch } from '../actions/batches'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from 'material-ui/Typography';
import {
    withStyles
} from 'material-ui/styles';
import * as combine from "lodash/fp/compose"
import '../styles/style.css'


const styles = theme => ({
  heading: {
      color: "#711F9B",
      fontSize: 16,
  }
});

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
        const { batches, classes } = this.props
        
        return (       
            <div className="BatchContainer">

                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>+ Add more...</Typography>
                    </ExpansionPanelSummary>
                        <Typography>
                            < BatchForm onSubmit = {
                                this.createBatch
                            }
                            />
                        </Typography>
                </ExpansionPanel>
               
                
                
                    <div className="list-group">
                    {batches.sort( (a,b) => a.id -b.id    )
                            .map( (batch, index) =>( 
                                <a href={"batches/" + batch.id} className="list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">Batch {batch.number}</h5>
                                    </div>
                                    <p className="mb-1">Start: {batch.startdate}  --- End: {batch.enddate}</p>
                                    <p>DB: {batch.id} </p>
                                </a>
                        ))
                        }
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

export default combine(
    withStyles(styles),
    connect(mapStateToProps, { fetchBatches, createBatch })
)(BatchContainer)



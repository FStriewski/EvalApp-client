import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BatchForm from './BatchForm'
import { fetchBatches, createBatch } from '../actions/batches'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import * as combine from "lodash/fp/compose"
import Link from '@material-ui/icons/Link';
import '../styles/style.css'


const styles = theme => ({
  heading: {
      color: "#d9534f",
      fontSize: 18,
  },
    header: {
        borderColor: "#d9534f",
        color: "#d9534f",
        fontSize: 18,
        paddingTop: 30,
    },
    cell: {
        borderColor: "#d9534f",
        backgroundColor: "#f2f2f2",
        fontSize: 15,
    },
    bar: {
        backgroundColor: "#f2f2f2",
        borderColor: "black",
    },
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

                <ExpansionPanel className={classes.bar}>
                    <ExpansionPanelSummary expandIcon={<ArrowDropDown />}>
                        <Typography className={classes.heading}>+ Add Batch...</Typography>
                    </ExpansionPanelSummary>
                        <Typography>
                            < BatchForm onSubmit = {
                                this.createBatch
                            }
                            />
                        </Typography>
                </ExpansionPanel>


                <Table className={classes.table}>
                    <TableHead >
                        <TableRow >

                            <TableCell className={classes.header}>#</TableCell>
                            <TableCell className={classes.header}>Name</TableCell>
       
                            <TableCell className={classes.header}>Start</TableCell>
                            <TableCell className={classes.header}>End</TableCell>
              
                            <TableCell className={classes.header}>Link </TableCell>

                        </TableRow>
                    </TableHead>


                    <TableBody>
                    {batches.sort( (a,b) => a.id -b.id    )
                            .map(batch => {
                                return (
                                
                                <TableRow key={batch.id}>
                                    <TableCell className={classes.cell}>{batch.id}</TableCell>

                                    <TableCell className={classes.cell}>Batch {batch.number}</TableCell>

                                    <TableCell className={classes.cell}>{batch.startdate}</TableCell>

                                    <TableCell className={classes.cell}>{batch.enddate}</TableCell>

                                    <TableCell className={classes.cell}><a href={"batches/" + batch.id}  target="_self"><Link/></a></TableCell>
                                </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>  
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



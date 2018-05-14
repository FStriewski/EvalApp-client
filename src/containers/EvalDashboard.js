import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper';
import StatusBar from '../components/StatusBar'
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux'
import * as combine from "lodash/fp/compose"

const styles = theme => ({
    // heading: {
    //     fontSize: 18,
    // },
    // bar: {
    //     backgroundColor: "#f2f2f2",
    //     borderColor: "black",
    // },
    // batchheader: {
    //     fontSize: 28,
    //     textAlign: "center",
    //     padding: 4,
    //     color: "#4d4d4d"
    // },
});

 class EvalDashboard extends PureComponent {

    render() {

        const { classes } = this.props
        const students = this.props.batches.students

        return (
            <div id="dashboard-wrapper" className="row" >
                <div className="col" >
                    <Paper className="dashboard-tile">
                        <h5>General Stats</h5>
                        <p>Batch No:    </p>
                        <p>Student num </p>

                </Paper>
                </div>
                <div className="col" >
                    <Paper className="dashboard-tile">
 
                        <StatusBar done={this.props.evaluatedToday} count={students.length} title={"Evaluated Today"} />

                        <StatusBar done={this.props.sorted} count={students.length} title={"Class Summary"} />
                </Paper>
                </div>
                <div className="col" >
                    <Paper className="dashboard-tile">

                        Student Picker
                </Paper>
                </div>



            {/* <Paper className={classes.bar}>
                <div className={classes.batchheader}>Batch {this.props.batches.id}</div>

                <div id="StatusBars" className="row justify-content-center" >

                    <StatusBar done={evaluatedToday} count={students.length} title={"Evaluated Today"} />

                    <StatusBar done={sorted} count={students.length} title={"Class Summary"} />

                </div>

                <h6>Algorithm Result</h6>
                 <p>{pickStudent(histogram(notEvaluated, neverEvaluatedIDs))}</p> 
            </Paper> */}
 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        batches: state.batches

    }
}

export default combine(
    withStyles(styles),
    connect(mapStateToProps, {  })
)(EvalDashboard)
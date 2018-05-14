import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper';

export default class EvalDashboard extends PureComponent {

    render() {

        return (
            <div id="dashboard-wrapper" className="row" >
                <div className="col" >
                    <Paper>General Stats
                </Paper>
                </div>
                <div className="col" >
                    <Paper> Statusbar
                </Paper>
                </div>
                <div className="col" >
                    <Paper> Student Picker
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
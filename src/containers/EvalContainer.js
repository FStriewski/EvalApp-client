import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EvalForm from '../components/EvalForm'
import ScoreTile from '../components/ScoreTile'
import Paper from 'material-ui/Paper';
import { fetchOneStudent } from '../actions/students'
import { createEvaluation } from '../actions/evaluations'
import { withStyles } from 'material-ui/styles';
import * as combine from "lodash/fp/compose"
import '../styles/style.css'

const styles = theme => ({
    paper: {
        textAlign: "center",
        padding: 20,
    },
});

class EvalContainer extends PureComponent {

    componentWillMount(props) {
        this.props.fetchOneStudent(this.props.match.params.id)
        // if (this.props.batches === []) this.props.fetchBatches()
    }

    createEvaluation = (evaluation) => {
        this.props.createEvaluation(this.props.student.id, evaluation)
    }

    render() {
        const { student, classes } = this.props

        console.log("Waiting...")
        console.log(student.evaluations)

        if (!student.evaluations) return null
        if (student.evaluations) {

            console.log(student.evaluations[0])
            return (
                <div className="EvalContainer">
                    <br/>
                    <div className = "row">
                        <div className= "col-3 ml-4">
                    
                    <Paper className={classes.paper}>
                            <h3>{student.name}  </h3>
                            <h6>(Batch {student.batch.id}) </h6>

                            <img src={student.link} alt="x" height="150" width="150" />                        
                    </Paper>
                        </div>
                        <div className="col-1">
                        </div>
                            <div className="col">
                            <h3>Progress so far:</h3>
                            <div className="ScoreTiles" style={{ display: "flex", flexDirection: 'row' }}>
                                {student.evaluations.map((student, index) =>

                                    <ScoreTile key={index} color={student.grade} /> 
                                )}
                            </div>

                            <EvalForm onSubmit={this.createEvaluation} />
                        </div>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        student: state.students,
        // batches: state.batches
    }
}

export default combine(
    withStyles(styles),
     connect(mapStateToProps, { fetchOneStudent, createEvaluation })
)(EvalContainer)
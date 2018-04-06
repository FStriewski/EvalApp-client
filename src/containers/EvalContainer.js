import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import EvalForm from '../components/EvalForm'

import ScoreTile from '../components/ScoreTile'

import { fetchOneStudent } from '../actions/students'
import { createEvaluation } from '../actions/evaluations'

import '../styles/style.css'

class EvalContainer extends PureComponent {

    componentWillMount(props) {
        this.props.fetchOneStudent(this.props.match.params.id)
        // if (this.props.batches === []) this.props.fetchBatches()
    }

    createEvaluation = (evaluation) => {
        this.props.createEvaluation(this.props.student.id, evaluation)
    }


    render() {
        const { student } = this.props

        console.log("Waiting...")
        console.log(student.evaluations)

        if (!student.evaluations) return null
        if (student.evaluations) {

            console.log(student.evaluations[0])
            return (
                <div className="EvalContainer">
                    <br/>
                    <div className = "row">
                        <div className= "col-4 ml-4">
                    
                            <h3>{student.name}  </h3>
                            <h5>(Batch {student.batch.id}) </h5>

                            <img src={student.link} alt="x" height="200" width="200" /> 
                                
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
                    <br /><br />
                    <Link className="btn btn-secondary ml-10" to={`/batches/${student.batch.id}`} >Back</Link> 
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

export default connect(mapStateToProps, { fetchOneStudent, createEvaluation })(EvalContainer)
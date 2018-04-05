import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EvalForm from '../components/EvalForm'
import StudentListContainer from './StudentListContainer';
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
                    EvalContainer
                <h3>{student.name}</h3>
               
                <h5>(Batch {student.batch.id})</h5>

                    <h6>Progress so far:</h6>
                    <div className="ScoreTiles" style={{ display: "flex", flexDirection: 'row' }}>
                        {student.evaluations.map((student, index) =>

                            <ScoreTile key={index} color={student.grade} /> 
                        )}
                    </div>
                
                    <EvalForm onSubmit={this.createEvaluation} />
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
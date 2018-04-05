import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EvalForm from '../components/EvalForm'
import StudentListContainer from './StudentListContainer';
import ScoreTile from '../components/ScoreTile'

import { fetchOneStudent } from '../actions/students'
import { fetchBatches, createBatch } from '../actions/batches'

import '../styles/style.css'

class EvalContainer extends PureComponent {

    componentWillMount(props) {
        this.props.fetchOneStudent(this.props.match.params.id)
        // if (this.props.batches === []) this.props.fetchBatches()
    }

    createEvaluation = (evaluation) => {
        console.log(evaluation)
        this.props.createEvaluation(evaluation)
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

                <p>Batchname</p>

                    <div className="ScoreTiles" style={{ display: "flex", flexDirection: 'row' }}>
                        {student.evaluations.map((student, index) =>
                    //    <p> {student.grade} </p>

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
        batches: state.batches
    }
}

export default connect(mapStateToProps, { fetchOneStudent, fetchBatches })(EvalContainer)
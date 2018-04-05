import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import EvalForm from '../components/EvalForm'
import StudentListContainer from './StudentListContainer';
import ScoreTile from '../components/ScoreTile'

import { fetchOneStudent } from '../actions/students'

import '../styles/style.css'

class EvalContainer extends PureComponent {

    componentWillMount(props) {
        this.props.fetchOneStudent(this.props.match.params.id)
    }


    render() {
        const { student } = this.props

        console.log("Waiting...")
        console.log(student)
        console.log(student.evaluations)

        if (student) {
        const scores = [1, 2, 3, 4]
            console.log(student.evaluations)
            return (
                <div className="EvalContainer">
                    EvalContainer
                <h3>{student.name}</h3>
                {/* <p>{student.evaluations[0].grade}</p> */}
                <p>Batchname</p>


                    <Link to={'/students'} component={StudentListContainer}>Back</Link> 

                    <div className="ScoreTiles" style={{ display: "flex", flexDirection: 'row' }}>
                        {/* {student.evaluations.map((x, index) =>
                       <p> {x.grade} </p>
                            // <ScoreTile key={index} />
                        )} */}
                    </div>
                
                    <EvalForm />
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        student: state.students,
    }
}

export default connect(mapStateToProps, { fetchOneStudent })(EvalContainer)
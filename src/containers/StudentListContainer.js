import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import BatchList from '../components/BatchList';
import StatusBar from '../components/StatusBar'
import { fetchStudents, createStudent } from '../actions/students'
import '../styles/style.css'


 class StudentListContainer extends PureComponent {

    componentWillMount = () => {
        this.props.fetchStudents()
    }

    render() {
        const { students } = this.props
        
        return (
            <div className="StudentListContainer">

                <p>StudentListContainer</p>

                <StatusBar />

                <Link to={'/batches'} component={BatchList}>Back</Link>
      
                {students.map((student, index) => (
                    <div
                        key={index}
                        className="StudentTile"
                    >
                        <p>ADD PIC</p>
                        <p>{student.name}</p>
{/* !Links need fixing once Students are in       */}
                        {/* <Link to={'/student'} component={StudentListContainer}>Go To</Link> */}
                    </div>
                ))}
                        
                <button>Randomize!</button>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps, { fetchStudents, createStudent })(StudentListContainer)
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import BatchList from '../components/BatchList';
import StatusBar from '../components/StatusBar'
import StudentForm from '../components/StudentForm'
import { fetchStudents, createStudent } from '../actions/students'
import { fetchBatches } from '../actions/batches'
import { fetchOneBatch } from '../actions/batches'
import '../styles/style.css'

import StudentTile from '../components/StudentTile'


 class StudentListContainer extends PureComponent {

    //  static propTypes = {
    //      students: PropTypes.arrayOf(PropTypes.shape({
    //          name: PropTypes.string.isRequired,
    //          link: PropTypes.string.isRequired
    //      })).isRequired
    //  }


    //Don't remove
     componentWillMount(props) {
         this.props.fetchOneBatch(this.props.match.params.id)
         //this.props.fetchOneBatch(1)
     }

  
    render() {
        const {batches} = this.props
        if (this.props.batches === undefined) return 'Waiting...'
        if(!this.props.batches) return null

        const students=batches.students
       
        console.log(1)
        console.log(batches)
        console.log(2)  
        console.log(students)
  
        return (
            <div className="StudentListContainer">
            
                <p>StudentListContainer</p>

                <StatusBar />

                <StudentForm/>  

                <Link to={'/batches'} component={BatchList}>Back</Link>
      
                <div>
            
                {/* {this.props.batches.students.map( (student, index) => (
                    // <StudentTile
                    //     key={index}
                    //     name={student.name}

                    // />
                    <div>1</div>
                ))} */}
                </div>
                   
                <button>Randomize!</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        batches:  state.batches,
    }
}

export default connect(mapStateToProps, { fetchBatches, fetchOneBatch, fetchStudents, createStudent })(StudentListContainer)
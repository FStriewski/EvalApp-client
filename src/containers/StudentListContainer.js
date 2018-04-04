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
     }

  
    render() {
        const {batch } = this.props
        if(!batch) return null
       

        console.log(this.props.batches)
        return (
            <div className="StudentListContainer">
            
                <p>StudentListContainer</p>

                <StatusBar />

                <StudentForm/>  

                <Link to={'/batches'} component={BatchList}>Back</Link>
      
                
                {batch.students.map((student, index) => (
                    // <StudentTile
                    //     key={index}
                    //     name={student.name}

                    // />
                    <div>{student.name}</div>
                ))}
                   
                <button>Randomize!</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
          batch:  state.batch,
    }
}

export default connect(mapStateToProps, { fetchBatches, fetchOneBatch, fetchStudents, createStudent })(StudentListContainer)
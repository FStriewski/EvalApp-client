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

     createStudent = (student) => {
         this.props.createStudent(this.props.batches.id,student)
     }

  
    render() {
        const {batches} = this.props
        if (this.props.batches === undefined){
            console.log("not there")
            return 'Waiting...'}
            
            if(!this.props.batches.students){
                console.log("is null")
                return null
            }

        let students=batches.students
       
        console.log(1)
        console.log(batches)
        console.log(2)  
        console.log(students)
        if(students){
            return (
                <div className="StudentListContainer">
                
                    <p>StudentListContainer</p>
                    <StudentForm onSubmit={this.createStudent}/>  

                    <div class="row justify-content-center" >
                        <StatusBar />
                        <button className="btn btn-danger ">Get random</button>
                    </div>
                    <br/>
        
                    <div className="list-group">
                        {students.map( (student, index) => (
                            <a href={"../students/"+ student.id + "/evaluation" } className=" w-25 p-3 list-group-item list-group-item-action flex-row align-items-start">
                                <div className=" d-flex flex-wrap w-100 justify-content-between">
                                    <h5 className="mb-1">{student.name}</h5>
                                </div>
                            </a>
                        ))}
                    </div>
                    
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        batches:  state.batches,
    }
}

export default connect(mapStateToProps, { fetchBatches, fetchOneBatch, fetchStudents, createStudent })(StudentListContainer)
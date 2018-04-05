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

     action = (x) => {
         new Date().toJSON().slice(0, 10)

         let withEval = x.filter(i => i.evaluations.length > 1)
         
         let y = x[0].evaluations[x[0].evaluations.length - 1].date
      
         //console.log(y)
         console.log("withEval" + withEval)
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

        const students=batches.students
      
        if(students){
            return (
                <div className="StudentListContainer">
                
                    <p>StudentListContainer</p>
                    <p>{new Date().toJSON().slice(0,10)}</p>

                    <StudentForm onSubmit={this.createStudent}/>  

                    <div class="row justify-content-center" >
                        <StatusBar />

                        <button className="btn btn-danger " onClick={this.action(students)}>Get random</button>

                    </div>
                    <br/>
        
                        <div className="d-flex flex-wrap" >
                        {  students.map( 
                            (student, index) => (
                                <StudentTile key={index} name={student.name} id={student.id} evaluation={student.evaluations[ student.evaluations.length-1 ] || "null" }
                                /> 
                            )
                        ) }               
                        </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state) => {
    return {
        batches:  state.batches
        
    }
}

export default connect(mapStateToProps, { fetchBatches, fetchOneBatch, fetchStudents, createStudent })(StudentListContainer)
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
import { getGroups} from './logic'
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

    
     handleAction = (students) => {
         //return getGroups(students)
     }

  
    render() {
        // <Link to={'/login'} component={LogInContainer}>Back</Link> 

        const students = this.props.batches.students
       // const {batches} = this.props
       // const students=batches.students
       
        if (this.props.batches === undefined){
            console.log("not there")
            return 'Waiting...'}
            
            if(!this.props.batches.students){
                console.log("is null")
                return null
            }

        const today = new Date().toJSON().slice(0, 10)
        const sorted = students
                        .filter(student => student.evaluations.length > 0)
                        .map(
                           (student, index) => {
                                console.log("--has an eval" + student.name)

                               student.evaluations = student.evaluations.sort((a, b) => new Date(b.date) - new Date(a.date))
                               return student
                                
                            }
                           )
        const evaluatedToday = sorted.filter(
                        student => student.evaluations[0].date === today
        )

        const notEvaluated = sorted.filter(
            student => student.evaluations[0].date !== today
        )

        const neverEvaluatedIDs = students
                                .filter( student => student.evaluations.length === 0 )
                                .map(student => student.id)

        // don't have an EvalArray -- array of ids
        // const neverEvaluatedIDs = neverEvaluated.map(student =>
        //     student.id
        // )
        console.log( JSON.stringify( neverEvaluatedIDs )  )

        const histo = (notEvaluated, neverEvaluatedIDs) => {

            const histogram = {
                red: [],
                yellow: [],
                green: []
            }

            //allGrades.map(grade => histogram[grade] += 1)

             notEvaluated.map( student => {
                
                const grade = student.evaluations[0].grade
                const id = student.id

                histogram[grade].push(id)

                //return histogram
                })

            histogram["red"].concat(neverEvaluatedIDs)

            return histogram
        // console.log(JSON.stringify(notEvaluatedIDS)   )
    }

        console.log("Output:"+ JSON.stringify(histo(notEvaluated, neverEvaluatedIDs))  )


   
       // console.log("evaluated today" + JSON.stringify(notEvaluated))

    
        if(students){
            return (
                <div className="StudentListContainer">
                
                    <p>StudentListContainer</p>
                

                    <div id="StatusBars" className="row justify-content-center" >

                        <StatusBar done={evaluatedToday} count={students.length} title={"Evaluated Today:"} />

                        <StatusBar done={sorted} count={students.length} title={"Class Summary:"}/>

                    </div>
                    
                    <button className="btn btn-secondary " onClick={this.handleAction}>Get random</button>

                    <br/>

                    
                    <div id="StudentTiles" className="d-flex flex-wrap" >
                        {  students.map( 
                            (student, index) => {

                                const lastEval = student.evaluations.sort((a, b) => new Date(b.date) - new Date(a.date)) //.reverse()
                                const today = new Date().toJSON().slice(0, 10)

                                return <StudentTile key={index} name={student.name} id={student.id} evaluation={ lastEval[0] || "null" } 
                                /> 
                            }
                        ) }               
                    </div>

                    <StudentForm onSubmit={this.createStudent} />  
                    
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
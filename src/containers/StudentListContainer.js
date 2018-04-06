import React, { PureComponent } from 'react'

import { connect } from 'react-redux'
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

    
     handleAction = (students) => {
         //return getGroups(students)
     }

  
    render() {
        // <Link to={'/login'} component={LogInContainer}>Back</Link> 

        const students = this.props.batches.students

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
                               student.evaluations = student.evaluations.sort((a, b) => new Date(b.date) - new Date(a.date))
                               return student
                            }
                           )
        // Students that have been evaluated today                   
        const evaluatedToday = sorted.filter(
                        student => student.evaluations[0].date === today
        )

        // Students that have NOT been evaluated today but have an eval already
        const notEvaluated = sorted.filter(
            student => student.evaluations[0].date !== today
        )

        // Students that have NEVER been evaluated today 
        const neverEvaluatedIDs = students
                                .filter( student => student.evaluations.length === 0 )
                                .map(student => student.id)


        // Extract student ids based on their latest grade                       
        const histogram = (notEvaluated, neverEvaluatedIDs) => {

            const histogram = {
                red: [],
                yellow: [],
                green: []
            }

            // Put non-evaluated students into histogram
            notEvaluated.map( student => {
                const grade = student.evaluations[0].grade
                const id = student.id

                histogram[grade].push(id)
            })

             // Put never-evaluated students into histogram
            if (neverEvaluatedIDs.length > 0) {  
                histogram["red"] = histogram["red"].concat(neverEvaluatedIDs)
            } 

            return histogram
        }

    // Pick a random student based on the weights    
    const pickStudent = (histogram) => {

        const { red, yellow, green } = histogram

        let randomNumber = Math.floor(Math.random()*100)

        if (randomNumber <= 53) {
            console.log("The lucky student's ID (red) is " + red[Math.floor(Math.random() * red.length)] )
            return red[Math.floor(Math.random() * red.length)]
        } 
        else if (randomNumber >= 81) {
            console.log("The lucky student's ID (green) is " + green[Math.floor(Math.random() * green.length)])
            return green[Math.floor(Math.random() * green.length)]
        } 
        else {
            console.log("The lucky student's ID (yellow) is " + yellow[Math.floor(Math.random() * yellow.length)])
            return yellow[Math.floor(Math.random() * yellow.length)]
        }

    }

        // Print the Algorithm Result for now
        console.log(pickStudent(histogram(notEvaluated, neverEvaluatedIDs)))
        
        if(students){
            return (
                <div className="StudentListContainer">
                    <h3>Batch # {this.props.batches.id}</h3>

                    <div className="row justify-content-center"> <StudentForm onSubmit={this.createStudent} /></div>
                
                    <div id="StatusBars" className="row justify-content-center" >

                        <StatusBar done={evaluatedToday} count={students.length} title={"Evaluated Today"} />

                        <StatusBar done={sorted} count={students.length} title={"Class Summary"}/>

                    </div>

                    {/* <StudentForm onSubmit={this.createStudent} />   */}
                    
                    {/* <button className="btn btn-secondary " onClick={this.handleAction}>Get random</button> */}

     
                    <div id="StudentTiles" className="d-flex flex-wrap" >
                        {  students.map( 
                            (student, index) => {

                                const lastEval = student.evaluations.sort((a, b) => new Date(b.date) - new Date(a.date)).reverse()

                                return <StudentTile key={index} name={student.name} id={student.id} link={student.link} evaluation={ lastEval[0] || "null" } 
                                /> 
                            }
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
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import StatusBar from '../components/StatusBar'
import StudentForm from '../components/StudentForm'
import { fetchStudents, createStudent } from '../actions/students'
import { fetchBatches } from '../actions/batches'
import { fetchOneBatch } from '../actions/batches'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import * as combine from "lodash/fp/compose"
import '../styles/style.css'

import StudentTile from '../components/StudentTile'

const styles = theme => ({
    heading: {
        fontSize: 18,
    },
    bar: {
        backgroundColor: "#f2f2f2",
        borderColor: "black",
    },
});

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
        const { classes } = this.props
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
            return `The lucky student's ID (red) is ${red[Math.floor(Math.random() * red.length)]}`
        } 
        else if (randomNumber >= 81) {
            return `The lucky student's ID (green) is  ${green[Math.floor(Math.random() * green.length)]} `
        } 
        else {
            return `The lucky student's ID (yellow) is  ${yellow[Math.floor(Math.random() * yellow.length)]}`
        }

    }

        // Print the Algorithm Result for now
        console.log(  pickStudent(histogram(notEvaluated, neverEvaluatedIDs))  )
        
        if(students){
            return (
                <div className="StudentListContainer">
                    <h3>Batch # {this.props.batches.id}</h3>
   
                    <div id="StatusBars" className="row justify-content-center" >

                        <StatusBar done={evaluatedToday} count={students.length} title={"Evaluated Today"} />

                        <StatusBar done={sorted} count={students.length} title={"Class Summary"}/>

                    </div>

                    <h6>Algorithm Result</h6> 
                    <p>{pickStudent(histogram(notEvaluated, neverEvaluatedIDs))}</p>

                    <ExpansionPanel className={classes.bar}>
                        <ExpansionPanelSummary expandIcon={<ArrowDropDown />}>
                            <Typography className={classes.heading}>+ Add Student...</Typography>
                        </ExpansionPanelSummary>
                        <Typography >
                            < StudentForm onSubmit={
                                this.createStudent
                            }
                            />
                        </Typography>
                    </ExpansionPanel>

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

export default combine(
    withStyles(styles),
    connect(mapStateToProps, { fetchBatches, fetchOneBatch, fetchStudents, createStudent })
)(StudentListContainer)
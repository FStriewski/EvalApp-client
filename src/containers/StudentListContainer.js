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

     action = (students) => {
        
        // Gives todays date
        const today =  new Date().toJSON().slice(0, 10)
        const adate = "2018-04-05"

        // Array of students with an evaluation, latest first
         let withEval = students
                        .filter(x => x.evaluations.length > 0)
                       // .map(x => x.evaluations.date.sort().reverse() )

        // let sorter = (arr) => {
        //     let sortedArray = arr.sort( (a,b) => b.date - a.date   ) //.sort().reverse()
        //     console.log(JSON.stringify(sortedArray))
        //     return sortedArray
        // }
        
        let dontEval = withEval
            .filter(x => x.evaluations[0].date === today ) 
                // console.log("this" + sorted.date  )
                // return sorted.date === today 
        
        let noEval = students.filter(x => x.evaluations.length === 0 )

         let redGroup = withEval
             .filter(x => x.evaluations[x.evaluations.length - 1].grade === "red"
                 && x.evaluations[x.evaluations.length - 1].date !== today)

         let yellowGroup = withEval
             .filter(x => x.evaluations[x.evaluations.length - 1].grade === "red" && x.evaluations[0].date !== today)

         let greenGroup = withEval
             .filter(x => x.evaluations[x.evaluations.length - 1].grade === "red" && x.evaluations[0].date !== today)

             let test = redGroup.map(x => x.name)
         let test2 = noEval.map(x => x.name)
    //    let array =  ["2018-03-01", "2018-01-01" ]
    //   console.log( array.sort().reverse )


        // let y = x[0].evaluations[x[0].evaluations.length - 1].date
      
         //console.log(y)
         console.log("withEval" + JSON.stringify(withEval) )
         console.log("dontEval" + JSON.stringify( dontEval.name) )
         console.log("reds" + JSON.stringify(test))
         console.log("noEval" + JSON.stringify(test2))
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
                            (student, index) => {

                                const lastEval = student.evaluations.sort().reverse()

                                return <StudentTile key={index} name={student.name} id={student.id} evaluation={ lastEval[0] || "null" } 
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
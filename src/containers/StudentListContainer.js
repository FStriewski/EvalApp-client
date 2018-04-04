import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import StudentTile from '../components/StudentTile'
import BatchList from '../components/BatchList';
import StatusBar from '../components/StatusBar'
import '../styles/style.css'

export default class StudentListContainer extends PureComponent {

    render() {
        const students = [1,2,3,4]
        
        return (
            <div className="StudentListContainer">

                <p>StudentListContainer</p>

                <Link to={'/batches'} component={BatchList}>Back</Link>

                <StatusBar />

                <div className="StudentTiles" style={{ display: "flex", flexDirection: 'row' }}> 
                {students.map( (id,index) => 
                        <StudentTile key={index}/>
                )}
        
                
                        
                </div>

                <button>Randomize!</button>
            </div>
        )
    }
}

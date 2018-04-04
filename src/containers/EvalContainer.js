import React, { PureComponent } from 'react'
import EvalForm from '../components/EvalForm'
import { Link } from 'react-router-dom'
import StudentListContainer from './StudentListContainer';
import ScoreTile from '../components/ScoreTile'
import '../styles/style.css'

export default class EvalContainer extends PureComponent {

    render() {

        const scores = [1, 2, 3, 4]
        return (
            <div className="EvalContainer">
                EvalContainer
            <p>Studentname</p>
            <p>Batchname</p>


                <Link to={'/students'} component={StudentListContainer}>Back</Link> 

                <div className="ScoreTiles" style={{ display: "flex", flexDirection: 'row' }}>
                    {scores.map((id, index) =>
                        <ScoreTile key={index} />
                    )}
                </div>
            
                <EvalForm />
            </div>
        )
    }
}
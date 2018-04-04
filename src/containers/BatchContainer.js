import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import BatchTile from '../components/BatchTile'
import LogInContainer from './LogInContainer';
import '../styles/style.css'

export default class BatchContainer extends PureComponent {

    render() {
        const batches = [1,2,3,4]
        
        return (
            
            <div className="BatchContainer">
            <p>BatchContainer</p>
    
                <Link to={'/login'} component={LogInContainer}>Back</Link> 
                
                <div
                 style={{ display: "flex", flexDirection: 'row' }}> 


                {batches.map( (id,index) => 
                        <BatchTile key={index}/>
                )}
                </div>
    
            </div>
        )
    }
}

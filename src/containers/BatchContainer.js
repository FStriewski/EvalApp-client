import React, { PureComponent } from 'react'
import BatchTile from '../components/BatchTile'
import '../styles/style.css'

export default class BatchContainer extends PureComponent {

    render() {
        const batches = [1,2,3,4]
        
        return (
            <div className="BatchContainer" style={{ display: "flex", flexDirection: 'row' }}> 

            {batches.map( (id,index) => 
                    <BatchTile key={index}/>
            )}
    
            BatchContainer
                
            </div>
        )
    }
}

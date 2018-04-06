import React, { PureComponent } from 'react'
import StudentTileIndicator from './StudentTileIndicator'
import '../styles/style.css'

export default class StudentTile extends PureComponent {

    // classNames() {
    //     const  color  = this.props.evaluation.grade
    //     console.log(color)
    //     let classnames = ['StudentTile']
    //     classnames.push(`fill-${color}`)
    //     return classnames.join(' ')
    // }

    render() {
        if (!this.props.evaluation) return null
         if (this.props.evaluation){

            const today = new Date().toJSON().slice(0, 10)

            return (

                    <a href={"../students/" + this.props.id + "/evaluation"} className=" w-25 p-3 list-group-item list-group-item-action flex-row align-items-start ">

                        <div className=" d-flex flex-wrap w-100 justify-content-between" >
                            
                            <div>  
                                <h5 className="mb-1" sty>{this.props.name}</h5>

                                <StudentTileIndicator color={this.props.evaluation.grade} />

                                <p>Last eval: {this.props.evaluation.date  }</p>
                                <h6>{(this.props.evaluation.date === today ? "Evaluated!" : "")}   </h6>
                            </div>
                        </div>

                    </a>    
            )
        }
     }
}
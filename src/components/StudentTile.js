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

                    <a href={"../students/" + this.props.id + "/evaluation"} className=" w-25  list-group-item list-group-item-action flex-row align-items-start ">

                    <div className=" column d-flex flex-direction: column justify-content-center" >
                            
                        {/* <div className="column justify-content-center">   */}
                                <h5 className="mb-1" sty>{this.props.name}</h5>

                                <img src={this.props.link}  alt="x" height="100" width="100"/> 

                                <p>Last eval: {this.props.evaluation.date  }</p>
                                <StudentTileIndicator color={this.props.evaluation.grade} />

                                <h6>{(this.props.evaluation.date === today ? "Evaluated!" : "")}   </h6>
                            </div>
                        {/* </div> */}
                    </a>    
            )
        }
     }
}
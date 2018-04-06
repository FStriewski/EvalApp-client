import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class StatusBar extends PureComponent {

    bar(all, group) {

        let perc =  group/all * 100
        return { width: `${perc}%` }
    }


    render() {

        const evaluatedToday = this.props

        const allGrades = evaluatedToday.done.map(student => 
            student.evaluations[0].grade
        )

        const histogram = {
            red: 0,
            yellow: 0,
            green: 0
        }

        allGrades.map( grade => histogram[grade] +=1  )

        //console.log(JSON.stringify(histogram)   )

        return (
            <div className="StatusBar">

                <div class="progress">

                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={this.bar(allGrades.length, histogram.red)} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={this.bar(allGrades.length, histogram.yellow)} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={this.bar(allGrades.length, histogram.green)}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>


                </div>

            </div>
        )
    }
}


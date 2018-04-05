import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class StatusBar extends PureComponent {

    bar(all, group) {

        let perc =  group/all * 100
        return { width: `${perc}%` }
    }



    render() {

        const group = this.props
        const reds = group.action.red + group.action.blank
        const all =  group.action.yellow + group.action.green + reds


        return (
            <div className="StatusBar">

                <div class="progress">

                    <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={this.bar(all, reds)} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={this.bar(all, group.action.yellow)} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                    <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={this.bar(all, group.action.green)}aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>


                </div>

            </div>
        )
    }
}


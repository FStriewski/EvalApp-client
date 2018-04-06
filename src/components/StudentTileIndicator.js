import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class StudentTileIndicator extends PureComponent {

    classNames() {
        const { color } = this.props
        let classnames = ['ScoreTile']
        classnames.push(`fill-${color}`)
        return classnames.join(' ')
    }

    render() {
        return (
            <div className={this.classNames()} >
                {this.props.grades}

            </div>
        )
    }
}
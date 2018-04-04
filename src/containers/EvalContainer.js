import React, { PureComponent } from 'react'
import EvalForm from '../components/EvalForm'
import '../styles/style.css'

export default class EvalContainer extends PureComponent {

    render() {
        return (
            <div className="EvalContainer">
                EvalContainer
                <EvalForm />
            </div>
        )
    }
}
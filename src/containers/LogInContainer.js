import React, { PureComponent } from 'react'
import LogInForm from '../components/LogInForm'
import '../styles/style.css'

export default class LogInContainer extends PureComponent {

    login = (details) => {
        this.props.login(details)
    }

    render() {
        return (
            <div className="LogInContainer">
                
                <LogInForm onSubmit={this.login}/>
            </div>
        )
    }
}

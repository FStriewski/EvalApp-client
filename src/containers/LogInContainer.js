import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/logins'
import { Redirect } from 'react-router-dom'
import LogInForm from '../components/LogInForm'
import '../styles/style.css'

class LogInContainer extends PureComponent {

    handleSubmit = (details) => {
        this.props.login(details.email, details.password)
    }

    render() {
        if (this.props.login) return (
            <Redirect to="/batches" />
        )


        return (
            <div className="LogInContainer">
                           <div className="row justify-content-center" id="LogInForm-container">
                <LogInForm onSubmit={this.handleSubmit}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        login: state.login

    }
}

export default connect(mapStateToProps, { login })(LogInContainer)
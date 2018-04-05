import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/logins'
import LogInForm from '../components/LogInForm'
import '../styles/style.css'

class LogInContainer extends PureComponent {

    handleSubmit = (details) => {
        this.props.login(details.email, details.password)
    }

    render() {
        return (
            <div className="LogInContainer">
                
                <LogInForm onSubmit={this.handleSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        currentUser: state.currentUser

    }
}

export default connect(mapStateToProps, { login })(LogInContainer)
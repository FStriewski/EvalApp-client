import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/logins'
import { Redirect } from 'react-router-dom'

class LogOutButton extends PureComponent {
    componentWillMount() {
        this.props.logout()
    }

    render() {
        if (!this.props.login) return (
            <Redirect to="/login" />
        )

        return (
            <div></div>
        )
    }
}

const mapStateToProps = state => ({
    authenticated: state.login !== null
})

export default connect(mapStateToProps, { logout })(LogOutButton)

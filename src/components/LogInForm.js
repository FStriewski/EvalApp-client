import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class LogInForm extends PureComponent {

    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(
            { [name]: value }
        )
    }

    render() {
        return (
                <form id="LogInForm" onSubmit={this.handleSubmit}>
                        
                <div className="form-group">
                            <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange}aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>

                <div className="form-group">
                            <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                        </div>

                <button type="submit" className="btn btn-primary">Login</button>

                    </form>
        )
    }
}

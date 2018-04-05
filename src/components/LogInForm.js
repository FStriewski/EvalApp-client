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
            // <div class="row justify-content-center" id="LogInForm-container">
                <form id="LogInForm" onSubmit={this.handleSubmit}>
                        
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                    <input type="email" class="form-control" name="email" id="email" value={this.state.email} onChange={this.handleChange}aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>

                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                    <input type="password" class="form-control" name="password" id="password" value={this.state.password} onChange={this.handleChange} placeholder="Password"/>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>

                    </form>
                // </div>
        )
    }
}

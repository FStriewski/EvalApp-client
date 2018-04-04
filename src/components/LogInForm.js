import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class LogInForm extends PureComponent {


    render() {
        return (
            <div class="row justify-content-center" id="LogInForm-container">
                    <form id="LogInForm">
                        <div class="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Password"/>
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
        )
    }
}

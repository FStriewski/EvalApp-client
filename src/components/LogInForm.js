import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class LogInForm extends PureComponent {


    render() {
        return (
            <form id="LogInForm">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <br/>

                <button type="submit">Login</button>
            </form>
        )
    }
}

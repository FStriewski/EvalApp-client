import React, { PureComponent } from 'react'
import School from '@material-ui/icons/School';

import '../styles/style.css'

export default class TitleBar extends PureComponent {


    render() {
        return (
                <nav className="navbar navbar-light bg-danger">
                <School id="batchesIcon" ></School>
                <a id ="batchesLink" className="navbar-brand" href="/batches">
                    {/* <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/> */}
                              Student Evaluations
                     </a>
                <a id="logoutLink" href="/logout"> Logout</a>
                {/* <LogOutButton className="btn btn-warning" onClick={this.logout} /> */}
            </nav>
            
        )
    }
}

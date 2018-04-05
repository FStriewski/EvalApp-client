import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class TitleBar extends PureComponent {

    render() {
        return (
                <nav className="navbar navbar-light bg-danger">
                <a className="navbar-brand" href="/batches">
                    <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                            Student Evaluations
                     </a>
            </nav>
            
        )
    }
}

import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class EvalForm extends PureComponent {

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
            <form id="EvalForm">

                    <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" id="greenButton" className="btn btn-success">Yay!!</button>
                    <button type="button" id="yellowButton" className="btn btn-warning">Nah..</button>
                    <button type="button" id="redButton" className="btn btn-danger">Sucks</button>
                    </div>
                
                <br/>
                <div className="form-group">
                    <label htmlFor="evaldate"></label>
                    <input type="date" className="form-control mb-2 mr-sm-2" name="evaldate" id="evaldate" value={
                        this.state.date || ''
                    } onChange={this.handleChange} placeholder="Enter End Date" />
                </div>

                <div className="form-group">
                    <label htmlFor="remarks"></label>
                    <input className="form-control mb-2 mr-sm-2" name="remarks" id="remarks" value={
                        this.state.remarks || ''
                    } onChange={this.handleChange} placeholder="Remarks" />
                </div>
                <br />
                <button type="submit" className="btn btn-secondary mb-2 ">Save</button>
                <button type="submit" className="btn btn-secondary mb-2 ">Next</button>
            </form>
        )
    }
}

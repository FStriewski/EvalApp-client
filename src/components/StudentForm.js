import React, { PureComponent } from 'react'

export default class StudentForm extends PureComponent {
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
            <div className="navbar navbar-light bg-light justify-content-center mb-6" id="StudentForm-container">
                <form className="form-inline input-group mb-6" id="StudentForm" onSubmit={this.handleSubmit}>

                        <label htmlFor="name"></label>
                        <input className="form-control  mr-sm-3" name="name" id="name" value={
                            this.state.name || ''
                        } onChange={this.handleChange} placeholder="Student Name" />

                        <label htmlFor="link"></label>
                        <input type="url" className="form-control  mr-sm-3" name="link" id="link" value={
                            this.state.link || ''
                        } onChange={this.handleChange} placeholder="Image Link" />
                
                    <button type="submit" className="btn btn-secondary  mr-sm-3 ">Add</button>
                    {/* !This button might need to move or get a proper event handler */}
                    {/* <button type="submit" className="btn btn-secondary mb-2" disabled>Edit</button> */}
                </form>
            </div>
        )
    }
}


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
            <div class="row justify-content-center" id="StudentForm-container">
                <form className="form-inline" id="StudentForm" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="name"></label>
                        <input className="form-control mb-2 mr-sm-2" name="name" id="name" value={
                            this.state.name || ''
                        } onChange={this.handleChange} placeholder="Name" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="link"></label>
                        <input type="url" className="form-control mb-2 mr-sm-2" name="link" id="link" value={
                            this.state.link || ''
                        } onChange={this.handleChange} placeholder="Link" />
                    </div>

                    <button type="submit" className="btn btn-secondary mb-2 mr-sm-2 ">Add</button>
                    {/* !This button might need to move or get a proper event handler */}
                    <button type="submit" className="btn btn-secondary mb-2" disabled>Edit</button>
                </form>
            </div>
        )
    }
}


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
            <form onSubmit={this.handleSubmit}>
            <h3>Create a student</h3>
                <div>
                    <label htmlFor="name">Full name: &nbsp;</label>

                    <input name="name" id="name" value={
                        this.state.name || ''
                    } onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="imagelink">Link to img: &nbsp;</label>

                    <input name="imagelink" id="imagelink" value={
                        this.state.link || ''
                    } onChange={this.handleChange} />
                </div>


                <button type="submit">Create</button>

    {/* !This button might need to move or get a proper event handler */}
                <button type="submit">Edit</button>
            </form>
        )
    }
}


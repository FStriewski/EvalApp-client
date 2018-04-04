import React, { PureComponent } from 'react'

export default class BatchForm extends PureComponent {
    state = {}

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(
            (name === "number")
                ? { number: Number(value) }
                : { [name]: value }
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="number">Batch number: &nbsp;</label>

                    <input name="number" id="number" value={
                        this.state.number || ''
                    } onChange={this.handleChange} />
                </div>

                <div>
                    <label htmlFor="startdate">Start Date: &nbsp;</label>

                    <input name="startdate" id="startdate" value={
                        this.state.startdate || ''
                    } onChange={this.handleChange} />
                </div>


                <div>
                    <label htmlFor="enddate">End Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>

                    <input name="enddate" id="enddate" value={
                        this.state.enddate || ''
                    } onChange={this.handleChange} />
                </div>

                <button type="submit">Create new batch</button>
            </form>
        )
    }
}


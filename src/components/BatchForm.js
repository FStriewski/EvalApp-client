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
            <div class="row justify-content-center" id="BatchForm-container">
                <form className="form-inline" id="BatchForm" onSubmit={this.handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="number"></label>
                        <input className="form-control mb-2 mr-sm-2"  name="number" id="number" value={
                            this.state.number || ''
                        } onChange={this.handleChange} placeholder="Enter batch number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="startdate"></label>
                        <input type="date"  className="form-control mb-2 mr-sm-2" name="startdate" id="startdate" value={
                            this.state.startdate || ''
                        } onChange={this.handleChange} placeholder="Enter Start Date" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="enddate"></label>
                        <input type="date" className="form-control mb-2 mr-sm-2" name="enddate" id="enddate" value={
                            this.state.enddate || ''
                        } onChange={this.handleChange} placeholder="Enter End Date" />
                    </div>


                    <button type="submit" className="btn btn-secondary mb-2 ">Add</button>
                </form>
            </div>
        )
    }
}


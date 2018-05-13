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
            <div className="navbar navbar-light bg-light justify-content-center" id="BatchForm-container">
                <form className="form-inline input-group" id="BatchForm" onSubmit={this.handleSubmit}>
                   
                        <label htmlFor="number"></label>
                        <input className="form-control  mr-sm-3"  name="number" id="number" value={
                            this.state.number || ''
                        } onChange={this.handleChange} placeholder="Enter batch number" />
                  
                        <label htmlFor="startdate"></label>
                        <input type="date"  className="form-control mr-sm-3" name="startdate" id="startdate" value={
                            this.state.startdate || ''
                        } onChange={this.handleChange} placeholder="Enter Start Date" />
                 
                        <label htmlFor="enddate"></label>
                        <input type="date" className="form-control mr-sm-3" name="enddate" id="enddate" value={
                            this.state.enddate || ''
                        } onChange={this.handleChange} placeholder="Enter End Date" />
                  
                        <button type="submit" className="btn btn-success ">Add</button>
                </form>
            </div>
        )
    }
}


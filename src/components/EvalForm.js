import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class EvalForm extends PureComponent {


    render() {
        return (
            <form id="EvalForm">
            <p>Some date indication</p>

                <div className="evalButtons" style={{ display: "flex", flexDirection: 'column' }}>
                    <button id="greenButton" type="submit">Green</button>
                    <button id="yellowButton" type="submit">Yellow</button>
                    <button id="redButton" type="submit">Red</button>
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Remarks</label>
                    <input type="text" name="remarks" id="remarks" />
                </div>
                <br />

                <button type="submit">Save</button>
                <button type="submit">Save & Next</button>
            </form>
        )
    }
}

import React, { PureComponent } from 'react'
import '../styles/style.css'

export default class EvalForm extends PureComponent {


    render() {
        return (
            <form id="EvalForm">
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

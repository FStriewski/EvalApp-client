
import * as request from 'superagent'
import { CREATE_EVALUATION } from './types'
import history from '../history';

const baseUrl = 'http://localhost:4444'

export const createEvaluation = (studentId, evaluation) => (dispatch) => {
    
    console.log(studentId)
    console.log(evaluation)
    request
        .post(`${baseUrl}/evaluation/student/${studentId}`)
        .send(evaluation)

        .then(response => {
            dispatch({
                type: CREATE_EVALUATION,
                payload: response.body
            })
            // history.go()
        })
}

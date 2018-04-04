import * as request from 'superagent'
import { FETCH_STUDENTS, FETCH_ONE_STUDENT, CREATE_STUDENT } from './types'

const baseUrl = 'http://localhost:4444'


export const fetchStudents = () => (dispatch) => {
    request
        .get(`${baseUrl}/students`)
        .then(response => dispatch({
            type: FETCH_STUDENTS,
            payload: response.body
        }))
        .catch(e => console.log(e))

}

export const fetchOneStudent = (studentId) => (dispatch) => {
    request
        .get(`${baseUrl}/students/${studentId}`)
        .then(response => dispatch({
            type: FETCH_ONE_STUDENT,
            payload: response.body
        }))
        .catch(e => console.log(e))
}


export const createStudent = (batchId, student) => (dispatch) => {
    console.log(batchId, student)
    request
        .post(`${baseUrl}/batch/${batchId}/student`)
        .send(student)
        .then(response => dispatch({
            type: CREATE_STUDENT,
            payload: response.body
        }))
}
import * as request from 'superagent'
import { LOGIN, LOGOUT } from './types'

const baseUrl = 'http://localhost:4444'


export const login = (email, password) => (dispatch) => {
console.log(email, password)
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(result => {
            dispatch({
                type: LOGIN,
                payload: result.body
            })
        })
    }
    
export const logout = () => ({
        type: LOGOUT
})
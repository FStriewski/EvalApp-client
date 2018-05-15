import * as request from 'superagent'
import { FETCH_BATCHES, FETCH_ONE_BATCH, CREATE_BATCH, REMOVE_BATCH } from './types'
import history from '../history';

const baseUrl = 'http://localhost:4444'


export const fetchBatches = () => (dispatch) => {
    request
        .get(`${baseUrl}/batch`)
        .then(response => dispatch({
            type: FETCH_BATCHES,
            payload: response.body
        }))
        .catch(e => console.log(e))

}

export const fetchOneBatch = (batchId) => (dispatch) => {
    request
        .get(`${baseUrl}/batch/${batchId}`)
        .then(response => dispatch({
            type: FETCH_ONE_BATCH,
            payload: response.body
        }))
        .catch(e => console.log(e))
}
export const removeBatch = (batchId) => (dispatch) => {
    request
        .delete(`${baseUrl}/batch/${batchId}`)
        .then(response => dispatch({
            type: REMOVE_BATCH,
            payload: response.body
        }))
        .catch(e => console.log(e))
}


export const createBatch = (batch) => (dispatch) => {
    console.log(batch)
    request
        .post(`${baseUrl}/batch`)
        .send(batch)
        .then(response => { 
            dispatch({
            type: CREATE_BATCH,
            payload: response.body
        })
        history.go()
        })
}
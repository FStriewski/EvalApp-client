import * as request from 'superagent'
import { FETCH_BATCHES, FETCH_ONE_BATCH } from './types'

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

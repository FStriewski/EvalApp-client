
import { FETCH_BATCHES, FETCH_ONE_BATCH, CREATE_BATCH  } from '../actions/types'


export default function (state = [], action) {
    switch (action.type) {

        case FETCH_ONE_BATCH:
            return action.payload

        case FETCH_BATCHES:
            return action.payload

        case CREATE_BATCH:
            return [...state, action.payload]

        default:
            return state
    }
}

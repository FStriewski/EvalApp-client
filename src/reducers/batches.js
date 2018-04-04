
import { FETCH_BATCHES, FETCH_ONE_BATCH  } from '../actions/types'


export default function (state = [], action) {
    switch (action.type) {

        case FETCH_ONE_BATCH:
            return [...state, action.payload]

        case FETCH_BATCHES:
            return action.payload

        default:
            return state
    }
}

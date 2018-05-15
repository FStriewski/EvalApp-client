
import { FETCH_BATCHES, FETCH_ONE_BATCH, CREATE_BATCH, REMOVE_BATCH  } from '../actions/types'


export default function (state = [], action) {
    switch (action.type) {

        case FETCH_ONE_BATCH:
            return action.payload

        case FETCH_BATCHES:
            return action.payload

        case CREATE_BATCH:
            return [...state, action.payload]

        case REMOVE_BATCH:
            console.log("Batch deleted")

        default:
            return state
    }
}

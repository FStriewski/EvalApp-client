
import { FETCH_EVALUATIONS, FETCH_ONE_EVALUATION, CREATE_EVALUATION } from '../actions/types'


export default function (state = [], action) {
    switch (action.type) {

        case FETCH_ONE_EVALUATION:
            return action.payload

        case FETCH_EVALUATIONS:
            return action.payload

        case CREATE_EVALUATION:
            return [...state, action.payload]

        default:
            return state
    }
}

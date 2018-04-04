

import { FETCH_STUDENTS, FETCH_ONE_STUDENT, CREATE_STUDENT } from '../actions/types'


export default function (state = [], action) {
    switch (action.type) {

        case FETCH_ONE_STUDENT:
            return action.payload

        case FETCH_STUDENTS:
            return action.payload

        case CREATE_STUDENT:
            return [...state, action.payload]

        default:
            return state
    }
}

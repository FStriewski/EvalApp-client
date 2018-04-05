

import { LOGIN, LOGOUT }from '../actions/types'

export const localStorageJwtKey = 'currentUserJwt'

let initialState = null
try {
    const jwt = localStorage.getItem(localStorageJwtKey)
    if (jwt) {
        initialState = { jwt }
    }
}
catch (e) {
    console.log(`Error retrieving data from local storage`, e)
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case LOGIN:
            return payload

        case LOGOUT:
            return null

        default:
            return state
    }
}

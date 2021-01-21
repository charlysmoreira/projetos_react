import {namberReducer} from './number'
import {userReducer} from './user'

export function chamadaPelaReducer(state, action) {
    let newState = namberReducer(state, action)
    return userReducer(newState, action)
}
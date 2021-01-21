export function namberReducer(state, action) {
    switch (action.type) {
        case 'addNumber2':
            return {...state, number: state.number + 2}
        case 'multiply7':
            return {...state, number: state.number * 7}
        case 'divide25':
            return {...state, number: state.number / 25}
        case 'parseInt':
            return {...state, number: parseInt(state.number)}
        case 'addNumberN':
            return {...state, number: state.number + parseInt(action.payload)}
        default:
            return state
    }
}
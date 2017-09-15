import * as actionTypes from '../actions/actionTypes'

const formActions = (state = {
  step: 1,
  title: '',
  name: '',
  surname: '',
  gender: '',
  ukResident: false }, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return { ...state,
        [action.input.id]: action.input.value
      }
    case actionTypes.NEXT_CARD:
      return { ...state,
        step: state.step + 1
      }
    default:
      return state
  }
}

export default formActions

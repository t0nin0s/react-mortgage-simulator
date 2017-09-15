import * as actionTypes from './actionTypes'

export const updateField = (input) => ({
  type: actionTypes.UPDATE_FIELD,
  input
})

export const goToNext = () => ({
  type: actionTypes.NEXT_CARD
})

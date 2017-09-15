import formActions from './formActions'
import * as actionTypes from '../actions/actionTypes'

describe("The formActions reducer", () => {
  it("should return the default state by default if it doesn't match any action", () => {
    const expectedState = {
      step: 1, title: '', name: '', surname: '', gender: '', ukResident: false
    }
    const state = formActions(undefined, {type: 'test'})
    expect(state).toEqual(expectedState)
  })

  it("should return step + 1 when NEXT_CARD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: false
    }
    const expectedState = {
      step: 3, title: '', name: '', surname: '', gender: '', ukResident: false
    }
    const state = formActions(previousState, {type: actionTypes.NEXT_CARD})
    expect(state).toEqual(expectedState)
  })

  it("should return new state when UPDATE_FIELD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: false
    }
    const expectedState = {
      step: 2, title: 'Mr', name: '', surname: '', gender: '', ukResident: false
    }
    const input = { id: 'title', value: 'Mr' }
    const state = formActions(previousState, {input: input, type: actionTypes.UPDATE_FIELD})
    expect(state).toEqual(expectedState)
  })

  it("should return new state when UPDATE_FIELD action is matched", () => {
    const previousState = {
      step: 2, title: '', name: '', surname: '', gender: '', ukResident: false
    }
    const expectedState = {
      step: 2, title: '', name: 'David', surname: '', gender: '', ukResident: false
    }
    const input = { id: 'name', value: 'David' }
    const state = formActions(previousState, {input: input, type: actionTypes.UPDATE_FIELD})
    expect(state).toEqual(expectedState)
  })
})

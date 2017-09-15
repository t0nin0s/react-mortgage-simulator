import React from 'react'
import { Provider } from 'react-redux'
import SignupForm from '../signupForm/SignupForm'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <SignupForm />
    </Provider>
  )
}
// TODO: check prop types
export default Root

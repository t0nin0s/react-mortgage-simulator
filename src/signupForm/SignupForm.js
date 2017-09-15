import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupFormPersonal from './SignupFormPersonal'
import * as actions from '../actions'

class SignupForm extends Component {

  handleOnChange = (event) => {
    const { value, id } = event.target
    this.props.updateField({value, id})
  }

  render () {
    switch (this.props.step) {
      case 1:
        return <SignupFormPersonal
          title={this.props.title}
          name={this.props.name}
          surname={this.props.surname}
          handleOnChange={this.handleOnChange}
          handleNext={this.props.goToNext} />

      default:
        return (
          <div>Loading...</div>
        )
    }
  }
}

export const mapStateToProps = (state) => {
  return {
    step: state.formActions.step,
    title: state.formActions.title,
    name: state.formActions.name,
    surname: state.formActions.surname
  }
}

export const mapDispatchToProps = ({
  goToNext: actions.goToNext,
  updateField: actions.updateField
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import SignupFormPersonal from './signupFormPersonal/SignupFormPersonal'
import SignupFormGender from './signupFormGender/SignupFormGender'
import SignupFormResident from './SignupFormResident/SignupFormResident'
import SignupFormResults from './signupFormResults/SignupFormResults'
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
      case 2:
        return <SignupFormGender
                gender={this.props.gender}
                handleOnChange={this.handleOnChange}
                handleNext={this.props.goToNext} />

      case 3:
        return <SignupFormResident
                resident={this.props.resident}
                handleOnChange={this.handleOnChange}
                handleNext={this.props.goToNext} />
      case 4:
        return <SignupFormResults
                title={this.props.title}
                name={this.props.name}
                surname={this.props.surname}
                gender={this.props.gender}
                resident={this.props.resident} />
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
    surname: state.formActions.surname,
    gender: state.formActions.gender,
    resident: state.formActions.ukResident
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

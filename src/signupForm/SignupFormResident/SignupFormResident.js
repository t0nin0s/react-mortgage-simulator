import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
import styles from '../signupForm.css'
import FontAwesome from 'react-fontawesome'
import MyButton from '../../components/Button/Button'

class SignupFormResident extends Component {
  constructor() {
    super()
    this.state = {
      error: false
    }
  }

  validate = () => {
    if (this.props.resident) {
      this.setState({
        error: false
      })
      this.props.handleNext()
    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <Card
        formTitle='Sign up'
        icon='home'>
        <div className={styles.form__question}>
          Are you a UK resident?
        </div>
        <div className={styles.form__body}>
          <MyButton
            id='ukResident'
            value='No'
            text='No'
            icon='times-circle'
            color='red'
            handleOnChange={this.props.handleOnChange} />
          <MyButton
            id='ukResident'
            value='Yes'
            text='Yes'
            icon='check-circle'
            color='green'
            handleOnChange={this.props.handleOnChange} />
        </div>
        { this.state.error &&
          <div className={styles.error_message}>
            Please select first your residency...
          </div>
        }
        <div className={styles.form__submit}>
          <FontAwesome
            name='arrow-circle-right'
            size='3x'
            style={{ color: '#ECECEC' }}
            onClick={this.validate}
          />
        </div>
      </Card>
    )
  }
}

SignupFormResident.propTypes = {
  resident: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default SignupFormResident

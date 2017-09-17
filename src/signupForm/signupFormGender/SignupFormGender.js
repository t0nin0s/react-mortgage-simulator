import React, { Component } from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
import styles from '../signupForm.css'
import FontAwesome from 'react-fontawesome'
import MyButton from '../../components/Button/Button'

class SignupFormGender extends Component {
  constructor() {
    super()
    this.state = {
      error: false
    }
  }

  validate = () => {
    if (this.props.gender) {
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
        icon='question-circle-o'
        footer>
        <div className={styles.form__question}>
          Please tell us your gender...
        </div>
        <div className={styles.form__body}>
          <MyButton
            id='gender'
            value='male'
            text='Male'
            icon='mars'
            large
            handleOnChange={this.props.handleOnChange} />
          <MyButton
            id='gender'
            value='female'
            text='Female'
            icon='venus'
            large
            handleOnChange={this.props.handleOnChange} />
        </div>
        { this.state.error &&
          <div className={styles.error_message}>
            Please select first your gender...
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

SignupFormGender.propTypes = {
  gender: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default SignupFormGender

import React from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
import styles from '../signupForm.css'
import FontAwesome from 'react-fontawesome'
import MyButton from '../../components/Button/Button'

const SignupFormGender = (props) => {
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
          handleOnChange={props.handleOnChange} />
        <MyButton
          id='gender'
          value='female'
          text='Female'
          icon='venus'
          large
          handleOnChange={props.handleOnChange} />
      </div>
      <div className={styles.form__submit}>
        <FontAwesome
          name='arrow-circle-right'
          size='3x'
          style={{ color: '#ECECEC' }}
          onClick={props.handleNext}
        />
      </div>
    </Card>
  )
}

SignupFormGender.propTypes = {
  gender: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default SignupFormGender

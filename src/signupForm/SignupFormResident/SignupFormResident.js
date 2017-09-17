import React from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
import styles from '../signupForm.css'
import FontAwesome from 'react-fontawesome'
import MyButton from '../../components/Button/Button'

const SignupFormResident = (props) => {
  if(props.resident === 'Yes') { console.log('is resident') }
  return (
    <Card
      formTitle='Sign up'
      icon='home'>
      <div className={styles.form__question}>
        Are you a UK Resident?
      </div>
      <div className={styles.form__body}>
        <MyButton
          id='ukResident'
          value='No'
          text='No'
          icon='times-circle'
          color='red'
          handleOnChange={props.handleOnChange} />
        <MyButton
          id='ukResident'
          value='Yes'
          text='Yes'
          icon='check-circle'
          color='green'
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

SignupFormResident.propTypes = {
  resident: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default SignupFormResident

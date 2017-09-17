import React from 'react'
import Card from '../../components/Card/Card'
import PropTypes from 'prop-types'
import styles from '../signupForm.css'

const SignupFormResults = (props) => {
  return (
    <Card
      formTitle='Sign up'
      icon='handshake-o'
      footer>
      <div className={styles.form__question}>
        Congratulations! Below is your data
      </div>
      <div className={styles.form__body}>
        <pre>
          {JSON.stringify(props)}
        </pre>
      </div>
      <div className={styles.form__submit}>

      </div>
    </Card>
  )
}

SignupFormResults.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  resident: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired
}

export default SignupFormResults

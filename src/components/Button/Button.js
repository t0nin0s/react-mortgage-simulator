import React from 'react'
import styles from './button.css'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const MyButton = (props) => {
  return (
    <button
      className={styles.button}
      id={props.id}
      value={props.value}
      onClick={props.handleOnChange}>
      <span className={styles.button__text}>
        {props.text}
      </span>
      <span className={styles.button__icon}>
        <FontAwesome
          name={props.icon}
          size='3x'
          style={{ color: '#A06FEFs'}}
        />
      </span>
    </button>
  )
}

MyButton.propTypes = {
  id: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
}

export default MyButton

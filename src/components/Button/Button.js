import React from 'react'
import styles from './button.css'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const MyButton = (props) => {
  let color = props.color
  let buttonStyle
  if(props.large) {
    buttonStyle = [styles.button, styles.fullWidth].join(' ')
  } else {
    buttonStyle = [styles.button, styles.halfWidth].join(' ')
  }
  return (
    <button
      className={buttonStyle}
      id={props.id}
      value={props.value}
      onClick={props.handleOnChange}>
      <span
        className={styles.button__text}>
        {props.text}
      </span>
      <span className={styles.button__icon}>
        <FontAwesome
          value={props.value}
          name={props.icon}
          size='3x'
          style={{ color: color }}
        />
      </span>
    </button>
  )
}

MyButton.propTypes = {
  id: PropTypes.string.isRequired,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  handleOnChange: PropTypes.func.isRequired
}

export default MyButton

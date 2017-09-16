import React from 'react'
import styles from './Card.css'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__title}>
        {props.formTitle}
      </div>
      <div className={styles.card__icon}>
        <FontAwesome
          name={props.icon}
          size='4x'
          style={{ color: '#A06FEF' }}
        />
      </div>
      <div className={styles.card__options}>
        {props.children}
      </div>
      <div className={styles.card__footer}>
        { props.footer &&
          'Why do you need this?'
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  formTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.node,
  footer: PropTypes.bool
}

export default Card

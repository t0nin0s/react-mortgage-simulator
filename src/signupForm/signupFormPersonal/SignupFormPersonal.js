import React, { Component } from 'react'
import {
  FormGroup,
  FormControl
} from 'react-bootstrap'
import Card from '../../components/Card/Card'
import styles from '../signupForm.css'
import FontAwesome from 'react-fontawesome'
import PropTypes from 'prop-types'

class SignupFormPersonal extends Component {
  constructor() {
    super()
    this.state = {
      title: null,
      name: null,
      surname: null
    }
  }

  handleSubmit = (event) => {
    this.props.handleOnChange()
  }

  validate = () => {
    let error = false
    let inputs = {
      title: this.props.title,
      name: this.props.name,
      surname: this.props.surname
    }
    Object.entries(inputs).forEach(([key, value]) => {
      if(!value) {
        this.setState({
          [key]: 'error'
        })
        error = true
      } else {
        this.setState({
          [key]: null
        })
      }
    })

    if(!error) {
      this.props.handleNext()
    }
  }

  render () {
    return (
      <Card
        formTitle='Sign up'
        icon='address-card-o'
        footer>
        <div className={styles.form__question}>
          Please tell us your name...
        </div>
        <form className={styles.form__body} onSubmit={this.handleSubmit}>
          <FormGroup validationState={this.state.title}>
            <FormControl
              value={this.props.title}
              onChange={this.props.handleOnChange}
              id='title'
              type='String'
              componentClass='select'
              placeholder='Select your title'
            >
              <option value=''>Select your title</option>
              <option value='Mr'>Mr</option>
              <option value='Mrs'>Mrs</option>
            </FormControl>
          </FormGroup>
          <FormGroup validationState={this.state.name}>
            <FormControl
              value={this.props.name}
              onChange={this.props.handleOnChange}
              className='form-control'
              id='name'
              type='string'
              placeholder='First Name'
            />
          </FormGroup>
          <FormGroup validationState={this.state.surname}>
            <FormControl
              value={this.props.surname}
              onChange={this.props.handleOnChange}
              className='form-control'
              id='surname'
              type='string'
              placeholder='Surname'
            />
          </FormGroup>
          <div className={styles.form__submit}>
            <FontAwesome
              name='arrow-circle-right'
              size='3x'
              style={{ color: '#ECECEC'}}
              onClick={this.validate}
            />
          </div>
        </form>
      </Card>
    )
  }
}

SignupFormPersonal.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired
}

export default SignupFormPersonal

import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button from './Button'

describe('SignupFormPersonal renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(
      <Button
        id=''
        value=''
        icon=''
        handleOnChange={jest.fn()} />
    )
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})

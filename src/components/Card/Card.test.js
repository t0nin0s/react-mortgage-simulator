import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Card from './Card'

describe('Card renders as expected', () => {
  it('should render as expected', () => {
    const component = shallow(<Card formTitle='Sign up' />)
    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })
})

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

const Root = styled('div')({
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

const OptionsContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row wrap'
})

const OptionItem = styled('div')({
  background: '#f0f0f0',
  border: '1px solid #ccc',
  margin: '1vw',
  padding: '2rem'
})

export default class HomePage extends PureComponent {
  render() {
    return (
      <Root>
        <h1>Choose category</h1>
        <OptionsContainer>
          <Link to='/construct'>
            <OptionItem>Cryptocurrency exchanges rates</OptionItem>
          </Link>
          <Link to='/construct'>
            <OptionItem>Stock exchange rates</OptionItem>
          </Link>
          <Link to='/construct'>
            <OptionItem>Sports Betting</OptionItem>
          </Link>
          <Link to='/construct'>
            <OptionItem>Random values</OptionItem>
          </Link>
        </OptionsContainer>
      </Root>
    )
  }
}
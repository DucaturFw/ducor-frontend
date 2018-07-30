import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

import Page from 'components/Page'
import OptionItem from './OptionItem'

export default class HomePage extends PureComponent {
  render() {
    return (
      <Page title='Choose category'>
        <OptionsContainer>
          <UndecoratedLink to='/construct'>
            <OptionItem
              img={require('./cryptExRates.svg')}
              title='Cryptocurrency exchanges rates' />
          </UndecoratedLink>
          <UndecoratedLink to='/construct'>
            <OptionItem
              img={require('./stockExRates.svg')}
              title='Stock exchange rates' />
          </UndecoratedLink>
          <UndecoratedLink to='/construct'>
            <OptionItem
              img={require('./sportsBetting.svg')}
              title='Sports Betting' />
          </UndecoratedLink>
          <UndecoratedLink to='/construct'>
            <OptionItem
              img={require('./randomValues.svg')}
              title='Random values' />
          </UndecoratedLink>
        </OptionsContainer>
      </Page>
    )
  }
}

const OptionsContainer = styled('div')({
  display: 'flex',
  flexFlow: 'column wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10vh 2vw',
  '@media (min-width: 760px)': {
    flexFlow: 'row wrap',
  }
})

const UndecoratedLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  display: 'flex',
  flexFlow: 'column nowrap',
  border: '3px solid transparent',
  borderRadius: '.3rem',
  boxSizing: 'border-box',
  height: '32vh',
  width: '100%',
  padding: '1rem',
  alignItems: 'stretch',
  ':hover': {
    border: `3px solid ${theme.borderColor}`,
  },
  '@media (min-width: 760px)': {
    width: '20vw',
  }
}))

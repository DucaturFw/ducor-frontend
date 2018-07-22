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
  flexFlow: 'row wrap',
  alignItems: 'center',
  justifyContent: 'center',
})

const UndecoratedLink = styled(Link)({
  textDecoration: 'none',
  height: '50vh',
  display: 'flex',
  alignItems: 'center',
})
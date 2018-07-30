import React, { PureComponent } from 'react'
import styled from 'react-emotion'

import Menu from 'components/Menu'

export default class Header extends PureComponent {
  render() {
    return (
      <Root>
        <SiteName>Oracles Marketplace</SiteName>
        <GroupedRow>
          <Menu/>
          <LocaleSelector>
            <option>English</option>
          </LocaleSelector>
        </GroupedRow>
      </Root>
    )
  }
}

const Root = styled('footer')({
  height: '14vh',
  display: 'flex',
  flexFlow: 'row wrap',
  width: '80vw',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10vw',
})

const SiteName = styled('div')(({ theme }) => ({
  color: theme.titleColor,
  fontSize: '1.2rem',
}))

const LocaleSelector = styled('select')(({ theme }) => ({
  background: theme.borderColor,
  padding: '.5rem 1rem',
  appearance: 'none',
  position: 'relative',
  marginLeft: '2rem',
  border: 0,
  '&::after': {
    boxShadow: '0 -.75rem 2rem red',
    content: '""',
    width: '10px',
    height: '10px',
    background: '#eee',
    position: 'absolute',
  },
}))

const GroupedRow = styled('div')({
  display: 'flex',
  flexFlow: 'row wrap',
  alignItems: 'center',
})
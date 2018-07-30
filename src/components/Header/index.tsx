import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

import Menu from 'components/Menu'

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderContainer src={require('./bg.svg')}>
        <ToLeftContainer>
          <Link to='/'>
            <Logo src={require('./logo.svg')} />
          </Link>
          <Menu/>
        </ToLeftContainer>
        <HamburgerIcon src={require('./hamburger.svg')} />
      </HeaderContainer>
    )
  }
}

const HeaderContainer = styled('header')(({ src }: { src: string }) => ({
  background: `url("${src}")`,
  backgroundPositionX: '18rem',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  padding: '0 10vw',
  alignItems: 'center',
  height: '14vh',
  boxSizing: 'border-box',
  boxShadow: '0 1rem 2rem rgba(0, 0, 0, .5)'
}))

const ToLeftContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  alignItems: 'center',
})

const Logo = styled('img')({
  width: '12rem',
})

const HamburgerIcon = styled('img')({

})
import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

export default class Menu extends PureComponent {
  render() {
    return (
      <Root>
        <MenuLink to='#'>Category</MenuLink>
        <MenuLink to='#'>Data</MenuLink>
        <MenuLink to='#'>Code</MenuLink>
      </Root>
    )
  }
}

const Root = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  fontSize: '1.2rem',
  marginLeft: '4rem',
})

const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  padding: '0 1rem',
  color: theme.menuLinkColor,
  ':hover': {
    color: theme.titleColor,
  }
}))

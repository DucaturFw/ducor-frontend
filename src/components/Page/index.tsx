import React, { PureComponent } from 'react'
import styled from 'react-emotion'

import Header from 'components/Header'
import Footer from 'components/Footer'

export interface Props {
  title: string
  childern?: any
}

export default class Page extends PureComponent<Props> {
  render() {
    return (
      <Root>
        <Header/>
        <Main>
          <H1>{this.props.title}</H1>
          <Container>
            {this.props.children}
          </Container>
        </Main>
        <Footer/>
      </Root>
    )
  }
}

const Root = styled('div')({
  display: 'flex',
  flexFlow: 'column nowrap',
  alignItems: 'space-between',
  width: '100vw',
  minHeight: '100vh',
})

const Main = styled('main')(({ theme }) => ({
  background: theme.mainBackgroundColor,
  minHeight: '61vh',
  padding: '2rem 0',
  '&::before': {
    boxShadow: '0 .75rem 2rem rgba(0, 0, 0, .5)',
    content: '""',
    height: '1px',
    background: '#eee',
    position: 'absolute',
    width: '100vw',
  },
  '&::after': {
    boxShadow: '0 -.75rem 2rem rgba(0, 0, 0, .5)',
    content: '""',
    height: '1px',
    background: '#eee',
    position: 'absolute',
    width: '100vw',
  },
}))

const H1 = styled('h1')(({ theme }) => ({
  textAlign: 'center',
  color: theme.titleColor,
  textTransform: 'uppercase',
  fontWeight: 'normal',
  paddingBottom: '1.5rem',
  margin: 0,
}))

const Container = styled('div')(({ theme }) => ({
  background: theme.lightColor,
  minWidth: '60vw',
  maxWidth: '90vw',
  margin: 'auto',
  boxShadow: '0 1rem 3rem rgba(163, 171, 186, .4)',
  borderRadius: '.35rem',
  boxSizing: 'border-box',
}))

import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

interface Props {
  img: string
  title: string
}

export default class HomePage extends PureComponent<Props> {
  render() {
    return (
      <Root>
        <Img src={this.props.img} />
        <Label>{this.props.title}</Label>
      </Root>
    )
  }
}

const Root = styled('div')(({ theme }) => ({
  alignItems: 'center',
  border: '3px solid transparent',
  borderRadius: '.3rem',
  boxSizing: 'border-box',
  display: 'flex',
  flexFlow: 'column nowrap',
  height: '15rem',
  margin: '1vw',
  padding: '1rem 0',
  width: '18vw',
  ':hover': {
    border: `3px solid ${theme.borderColor}`,
  }
}))

const Img = styled('div')(({ src }: { src: string }) => ({
  background: `url("${src}") center top no-repeat`,
  backgroundSize: 'initial',
  width: 'inherit',
  height: 150
}))

const Label = styled('span')({
  fontSize: '1.4rem',
  textAlign: 'center',
  lineHeight: '1.6rem',
})

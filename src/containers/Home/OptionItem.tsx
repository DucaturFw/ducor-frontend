import React, { PureComponent, Fragment } from 'react'
import styled from 'react-emotion'

interface Props {
  img: string
  title: string
}

export default class HomePage extends PureComponent<Props> {
  render() {
    return (
      <Fragment>
        <Img src={this.props.img} />
        <Label>{this.props.title}</Label>
      </Fragment>
    )
  }
}

const Img = styled('div')(({ src }: { src: string }) => ({
  background: `url("${src}") center top no-repeat`,
  backgroundSize: 'initial',
  width: '100%',
  height: 150
}))

const Label = styled('span')({
  fontSize: '1.4rem',
  textAlign: 'center',
  lineHeight: '1.6rem',
})

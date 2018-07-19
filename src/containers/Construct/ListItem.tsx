import React, { PureComponent } from 'react'
import styled from 'react-emotion'

const Container = styled('li')(({ selected }: { [key: string]: any }) => ({
  margin: '.25rem',
  padding: '.25rem',
  textAlign: 'center',
  border: '1px solid #ccc',
  cursor: 'pointer',
  background: selected ? '#ccc' : '#fff'
}))

export interface Props {
  type: string
  value: string
  selected: boolean
  onClick: (key: string, value: string) => void
}

export default class ListItem extends PureComponent<Props> {
  onClick = () => this.props.onClick(this.props.type, this.props.value)
  render() {
    return <Container {...this.props} onClick={this.onClick}>{this.props.value}</Container>
  }
}
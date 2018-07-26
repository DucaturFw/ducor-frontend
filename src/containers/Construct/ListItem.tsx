import React, { PureComponent } from 'react'
import styled from 'react-emotion'

export interface Props {
  type: string
  id: string
  label: string
  selected: boolean
  onClick: (key: string, value: string) => void
}

export default class ListItem extends PureComponent<Props> {
  onClick = () => this.props.onClick(this.props.type, this.props.id)
  render() {
    return <Container {...this.props} onClick={this.onClick}>{this.props.label}</Container>
  }
}

const Container = styled('li')(({ selected, theme }: { [key: string]: any }) => ({
  wisth: '100%',
  margin: '.25rem',
  padding: '.6rem',
  textAlign: 'center',
  cursor: 'pointer',
  background: selected ? theme.borderColor : theme.lightColor,
  border: `1px solid ${theme.borderColor}`,
  borderRadius: '.5rem'
}))

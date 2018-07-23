import React, { PureComponent, ChangeEvent } from 'react'
import styled from 'react-emotion'

export interface Props {
  name: string
  defaultValue: string
  onChange: (value: number) => void
}

export default class SelectNumber extends PureComponent<Props> {
  state = {
    value: parseInt(this.props.defaultValue)
  }

  componentDidUpdate() {
    this.props.onChange(this.state.value)
  }

  increase = () =>
    this.setState({ value: this.state.value + 1 })

  decrease = () =>
    this.setState({ value: this.state.value - 1 || 0 })
  
  set = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ value: event.target.value })

  render() {
    return (
      <Root>
        <Input
          name={this.props.name}
          type='number'
          value={this.state.value}
          onChange={this.set}
        />
        <Controls>
          <BtnUp onClick={this.increase}>
            <BtnImg src={require('./arrowUp.svg')}/>
          </BtnUp>
          <Separator/>
          <BtnDown onClick={this.decrease}>
            <BtnImg src={require('./arrowUp.svg')}/>
          </BtnDown>
        </Controls>
      </Root>
    )
  }
}

const Root = styled('div')({
  position: 'relative'
})

const Input = styled('input')(({ theme }) => ({
  fontSize: '1.1rem',
  height: '1.35rem',
  width: '5rem',
  padding: '.5rem .75rem .5rem 1rem',
  textAlign: 'center',
  border: `1px solid ${theme.borderColor}`,
  borderRadius: '.5rem',
  appearance: 'textfield'
} as any))

const BtnControl = styled('div')({
  width: '1rem',
  height: '1rem',
  margin: '0 .3rem'
})

const BtnUp = styled(BtnControl)()

const BtnDown = styled(BtnControl)({
  transform: 'rotate(180deg)',
})

const BtnImg = styled('img')({
  width: 'inherit',
  height: 'inherit',
})

const Separator = styled('div')(({ theme }) => ({
  width: '100%',
  height: '1px',
  background: theme.borderColor,
  boxShadow: '0 1px 1px #EDF4FF',
}))

const Controls = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  background: '#D5E5FF',
  border: `1px solid ${theme.borderColor}`,
  borderRadius: '0 .5rem .5rem 0',
  height: '2.35rem',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
}))
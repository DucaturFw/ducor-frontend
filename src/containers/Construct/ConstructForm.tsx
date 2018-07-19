import React, { PureComponent, ChangeEvent } from 'react'
import styled from 'react-emotion'

import ListItem from './ListItem'

export interface State {
  provider: string
  pair: string
  updateAfter: string
  retireAfter: string
}

export interface Props {
  onSubmit: (form: State) => void
}

export default class ConstructForm extends PureComponent<Props, State> {
  state = {
    provider: '',
    pair: '',
    updateAfter: '10',
    retireAfter: '11',
  }

  data = {
    pairs: [ 'ETH/BTC', 'ETH/USD', 'BTC/USD', 'EOS/ETH', 'EOS/BTC' ],
    providers: [ 'TOP-10', 'Binance', 'CoinMarketCap', 'HitBTC', 'Casino Yobit' ]
  }

  select = (key: string, value: string) =>
    this.setState({ [key]: value } as any)

  onInputChange = (event: ChangeEvent<HTMLInputElement>) =>
    this.setState({ [event.target.name]: event.target.value } as any)

  onSubmit = () =>
    this.props.onSubmit(this.state)

  render() {
    return (
      <FormContainer>
        <Column>
          <ColumnTitle>Currency pair</ColumnTitle>
          <List>
            {this.data.pairs.map(val =>
              <ListItem
                key={val}
                type='pair'
                value={val}
                onClick={this.select}
                selected={this.state.pair === val} />
            )}
          </List>
        </Column>
        <Column>
          <ColumnTitle>Data provider</ColumnTitle>
          <List>
            {this.data.providers.map(val =>
              <ListItem
                key={val}
                type='provider'
                value={val}
                onClick={this.select}
                selected={this.state.provider === val} />
            )}
          </List>
        </Column>
        <Column>
          <ColumnTitle>Update after</ColumnTitle>
          <LabeledInputContainer>
            <Input
              name='updateAfter'
              type='number'
              defaultValue={this.state.updateAfter}
              onChange={this.onInputChange}
            />
            <Label htmlFor='updateAfter'>blocks</Label>
          </LabeledInputContainer>

          <ColumnTitle>Retire data after</ColumnTitle>
          <LabeledInputContainer>
            <Input
              name='retireAfter'
              type='number'
              defaultValue={this.state.retireAfter}
              onChange={this.onInputChange}
            />
            <Label htmlFor='retireAfter'>blocks</Label>
          </LabeledInputContainer>

          <MainBtn onClick={this.onSubmit}>Generate</MainBtn>
        </Column>
      </FormContainer>
    )
  }
}

const FormContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row wrap',
})

const Column = styled('div')({
  display: 'flex',
  flexFlow: 'column wrap',
  padding: '1rem',
})

const ColumnTitle = styled('strong')({
  fontSize: '1.2rem'
})

const List = styled('ul')({
  display: 'flex',
  flexFlow: 'column wrap',
  listStyle: 'none',
  padding: 0
})

const LabeledInputContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '1rem 0'
})

const Input = styled('input')({
  padding: '.25rem'
})

const Label = styled('label')({
  fontSize: '.9rem',
  padding: '0 .5rem'
})

const MainBtn = styled('button')({
  background: 'orange',
  border: 0,
  color: '#fff',
  fontSize: '1.1rem',
  padding: '1.5rem',
})
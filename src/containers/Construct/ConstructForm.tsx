import React, { PureComponent } from 'react'
import styled from 'react-emotion'

import { Category } from 'reducers'
import { FormToSend } from 'actions'

import InputNumber from 'components/Input/Number'
import ListItem from './ListItem'

export interface Props {
  data?: Category[]
  onSubmit: (form: FormToSend) => void
}

export default class ConstructForm extends PureComponent<Props, FormToSend> {
  state = {
    provider: '',
    pair: '',
    updateAfter: '10',
    retireAfter: '11',
  }

  onSelect = (key: string, value: string) =>
    this.setState({ [key]: value } as any)

  onInputChange = (key: string) => (value: number) =>
    this.setState({ [key]: value } as any)

  onSubmit = () =>
    this.props.onSubmit(this.state)

  render() {
    console.log(this.props)
    const { data } = this.props
    if (!data) return <div />

    const category = data.filter(({ name }) => name === 'crypto')[0]
    const pairs = category.providers.map(({ types }) => types).reduce((a, b) => [ ...a, ...b], [])
    const providers = category.providers.map(({ id, name }) => [ id, name ])

    return (
      <FormContainer>
        <Column>
          <ColumnTitle>Currency pair</ColumnTitle>
          <List>
            {pairs.map(val =>
              <ListItem
                key={val}
                type='pair'
                id={val}
                label={val}
                onClick={this.onSelect}
                selected={this.state.pair === val} />
            )}
          </List>
        </Column>
        <SeperatorArrow />
        <Column>
          <ColumnTitle>Data provider</ColumnTitle>
          <List>
            {providers.map(([ id, name ]) =>
              <ListItem
                key={id}
                type='provider'
                id={id}
                label={name}
                onClick={this.onSelect}
                selected={this.state.provider === id} />
            )}
          </List>
        </Column>
        <SeperatorArrow />
        <Column>
          <VerticalDelimeter>
            <ColumnTitle>Update after</ColumnTitle>
            <LabeledInputContainer>
              <InputNumber
                name='updateAfter'
                defaultValue={this.state.updateAfter}
                onChange={this.onInputChange('updateAfter')}
              />
              <Label htmlFor='updateAfter'>blocks</Label>
            </LabeledInputContainer>
          </VerticalDelimeter>

          <VerticalDelimeter>
            <ColumnTitle>Retire data after</ColumnTitle>
            <LabeledInputContainer>
              <InputNumber
                name='retireAfter'
                defaultValue={this.state.retireAfter}
                onChange={this.onInputChange('retireAfter')}
              />
              <Label htmlFor='retireAfter'>blocks</Label>
            </LabeledInputContainer>
          </VerticalDelimeter>
        </Column>
        <ControlsRow>
          <MainBtn onClick={this.onSubmit}>
            Generate
            <Icon src={require('./arrowRight.svg')}/>
          </MainBtn>
        </ControlsRow>
      </FormContainer>
    )
  }
}

const FormContainer = styled('div')({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  padding: '0 2vw',
})

const Column = styled('div')({
  boxSizing: 'border-box',
  display: 'flex',
  flexFlow: 'column wrap',
  padding: '4vh 2vw',
  position: 'relative',
  textAlign: 'center',
  width: '30%',
  minWidth: '14rem'
})

const SeperatorArrow = styled('div')({
  background: `url("${require('./separatorArrow.svg')}") center center no-repeat`,
  width: 25,
  height: 95,
  marginTop: '8.5rem',
})

const ColumnTitle = styled('span')(({ theme }) => ({
  fontSize: '1.4rem',
  color: theme.titleColor,
}))

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
  margin: '1rem 0 2rem 0',
})

const VerticalDelimeter = styled('div')({
  margin: '.5rem 0'
})

const Label = styled('label')({
  padding: '0 .5rem',
})

const MainBtn = styled('button')(({ theme }) => ({
  background: theme.activeColor,
  border: 0,
  borderRadius: '2rem',
  color: theme.lightColor,
  fontSize: '1.4rem',
  padding: '.75rem 1rem .85rem 1rem',
  marginBottom: '2rem',
  cursor: 'pointer',
}))

const ControlsRow = styled('div')({
  flexBasis: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const Icon = styled('img')({
  marginLeft: '1rem'
})
import React, { PureComponent, Fragment } from 'react'
import styled from 'react-emotion'

import ListItem from './ListItem'
import { Category } from './index'
import InputNumber from 'components/Input/Number'

export interface State {
  provider: string
  pair: string
  updateAfter: string
  retireAfter: string
}

export interface Props {
  data?: Category[]
  onSubmit: (form: State) => void
}

export default class ConstructForm extends PureComponent<Props, State> {
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
    const { data } = this.props
    if (!data) return <div />
    const { provider, pair } = this.state

    const category = data.filter(({ name }) => name === 'crypto')[0]
    const providers = category.providers.map(({ id, name }) => [ id, name ])
    const pairs = provider ? category.providers
      .filter(p => p.id == provider)
      .map(({ types }) => types)
      .reduce((a, b) => [ ...a, ...b], []) : []

    return (
      <FormContainer>
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
                selected={provider === id} />
            )}
          </List>
          <ListShadow />
        </Column>
        { provider &&
          <Fragment>
            <SeperatorArrow />
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
                    selected={pair === val} />
                )}
              </List>
              <ListShadow />
            </Column>
            <SeperatorArrow />
            { pair &&
              <Fragment>
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
              </Fragment>
            }

            <ControlsRow>
              <MainBtn onClick={this.onSubmit} disabled={!(provider && pair)}>
                Generate
                <Icon src={require('./arrowRight.svg')}/>
              </MainBtn>
            </ControlsRow>
          </Fragment>
        }
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
  flexFlow: 'column nowrap',
  listStyle: 'none',
  padding: 0,
  overflowY: 'auto',
  maxHeight: '32vh',
})

const ListShadow = styled('div')({
  marginTop: '-2rem',
  width: '100%',
  height: '1.5rem',
  background: 'linear-gradient(transparent 0%, #fff 80%)'
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
  ':disabled': {
    background: '#ccc',
    cursor: 'no-drop',
  }
}))

const ControlsRow = styled('div')({
  flexBasis: '100%',
  display: 'flex',
  justifyContent: 'center',
})

const Icon = styled('img')({
  marginLeft: '1rem'
})
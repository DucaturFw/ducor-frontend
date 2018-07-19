import React, { PureComponent } from 'react'
import styled from 'react-emotion'

import ConstructForm, { State } from './ConstructForm'
import { withRouter } from 'react-router'
import { History } from 'history'

interface Props {
  history: History
}

class ConstructPage extends PureComponent<Props> {
  onFormSubmit = (form: State) =>
    console.log({ form }) || this.props.history.push('contractCode')

  render() {
    return (
      <Root>
        <H1>Choose data to receive</H1>
        <ConstructForm onSubmit={this.onFormSubmit} />
      </Root>
    )
  }
}

const Root = styled('div')({
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
})

const H1 = styled('h1')()

export default withRouter(ConstructPage as any)
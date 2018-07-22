import React, { PureComponent } from 'react'

import ConstructForm, { State } from './ConstructForm'
import { withRouter } from 'react-router'
import { History } from 'history'

import Page from 'components/Page'

interface Props {
  history: History
}

class ConstructPage extends PureComponent<Props> {
  onFormSubmit = (form: State) =>
    console.log({ form }) || this.props.history.push('contractCode')

  render() {
    return (
      <Page title='Choose data to receive'>
        <ConstructForm onSubmit={this.onFormSubmit} />
      </Page>
    )
  }
}

export default withRouter(ConstructPage as any)
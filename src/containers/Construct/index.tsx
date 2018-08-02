import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { History } from 'history'

import Page from 'components/Page'
import ConstructForm from './ConstructForm'
import { StoreState } from 'reducers'
import { sendForm, FormToSend } from 'actions'

interface Props {
  history: History
  config: StoreState['config']
  sendForm: (a: FormToSend) => void
}

class ConstructPage extends PureComponent<Props> {
  onFormSubmit = (form: FormToSend) => {
    this.props.sendForm(form)
    this.props.history.push('contractCode')
  }

  render() {
    return (
      <Page title='Choose data to receive'>
        <ConstructForm
          data={this.props.config}
          onSubmit={this.onFormSubmit} />
      </Page>
    )
  }
}

const mapStateToProps = ({ config }: StoreState) => ({ config })
const mapDispatchToProps = { sendForm }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ConstructPage as any))
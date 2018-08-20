import React, { PureComponent } from 'react'

import Page from 'components/Page'
import Contract from 'components/Contract'
import { API_URL } from 'config'
import { urlPropsToObject } from 'utils/uri'

interface Props {
  location: {
    search: string
  },
  match: {
    params: {
      name: string
      pair: string
      provider: string
      type: string
    }
  }
}

interface State {
  contract: string
  instructions: string
}

export default class ContractCodePage extends PureComponent<Props, State> {
  state = {
    contract: '',
    instructions: ''
  } as State

  async componentWillMount() {
    const { match: { params }, location: { search } } = this.props
    const { name, pair, provider, type } = params
    const { lifetime = 10, updatefreq = 10 } = urlPropsToObject(search) as { lifetime: string, updatefreq: string }

    const res = await fetch(`${API_URL}/generate/${name}/${type}/${provider}?config=${encodeURIComponent(JSON.stringify({ pair }))}&updatefreq=${updatefreq}&lifetime=${lifetime}`)
    const json = await res.json() as State
    this.setState(json)
  }

  render() {
    return (
      <Page title='Contract Code'>
        <Contract
          contract={this.state.contract}
          instructions={this.state.instructions} />
      </Page>
    )
  }
}

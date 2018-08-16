import React, { PureComponent } from 'react'

import { API_URL } from 'config'

import ConstructForm, { State as Form } from './ConstructForm'
import { withRouter } from 'react-router'
import { History } from 'history'

import Page from 'components/Page'

interface Props {
  history: History
}

export interface Category {
  name: string
  types?: string[] // not needed
  providers?: {
    id: string
    name: string
    types: string[]
  }[]
}

interface StateNew {
  categories: {
    name: string,
    meta?: {
      providers: {
        id: string
        name: string
        types: string[]
      }[]
    }
  }[]
}

interface State {
  categories?: Category[]
}

// TEMP
declare global {
  interface Window { store: any; }
}

class ConstructPage extends PureComponent<Props, State> {
  state = {
    categories: null
  } as State

  onFormSubmit = (form: Form) => {
    const { pair, provider, updateAfter, retireAfter } = form
    this.props.history.push(`/contract/eos/crypto/${provider}/${encodeURIComponent(pair)}?updatefreq=${updateAfter}&lifetime=${retireAfter}`)
  }
  
  async componentWillMount() {
    const res = await fetch(`${API_URL}/config`)
    const json = await res.json() as { categories: Category[] }
    this.setState(json)
  }

  render() {
    return (
      <Page title='Choose data to receive'>
        <ConstructForm
          data={this.state.categories}
          onSubmit={this.onFormSubmit} />
      </Page>
    )
  }
}

export default withRouter(ConstructPage as any)
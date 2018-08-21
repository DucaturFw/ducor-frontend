import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'react-emotion'

import { API_URL } from 'config'
import { urlPropsToObject } from 'utils/uri'

import Page from 'components/Page'
import Contract from './Contract'

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

export default class ContractCodePage extends Component<Props, State> {
  state = {
    contract: '',
    instructions: ''
  } as State

  fetchData = async (props: Props) => {
    const { match: { params }, location: { search } } = props
    const { name, pair, provider, type } = params
    const { lifetime = 10, updatefreq = 10 } = urlPropsToObject(search) as { lifetime: string, updatefreq: string }

    const res = await fetch(`${API_URL}/generate/${name}/${type}/${provider}?config=${encodeURIComponent(JSON.stringify({ pair }))}&updatefreq=${updatefreq}&lifetime=${lifetime}`)
    const json = await res.json() as State
    this.setState(json)
  }

  componentWillReceiveProps(nextProps: Props) {
    this.fetchData(nextProps)
  }

  componentWillMount() {
    this.fetchData(this.props)
  }

  render() {
    const { contract, instructions } = this.state
    const { match: { params }, location: { search } } = this.props
    const { name, pair, provider, type } = params
    const alternateProvider = name === 'eos' ? 'eth' : 'eos'
    const alternateLink = `/contract/${alternateProvider}/${type}/${provider}/${pair || ''}${search}`

    return (
      <Page title={`Contract Code ${name.toUpperCase()}`}>
        <ProviderSwitcher>
          <StyledLink to={alternateLink}>
            [ switch to {`${alternateProvider.toUpperCase()}`} ]
          </StyledLink>
        </ProviderSwitcher>
        <Contract
          contract={contract}
          instructions={instructions} />
      </Page>
    )
  }
}

const ProviderSwitcher = styled('div')({
  position: 'absolute',
  marginLeft: '70vw',
  marginTop: '-4rem'
})

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.activeColor,
  ':hover': {
    color: `lighten(${theme.activeColor}, 50%)`,
  }
}))
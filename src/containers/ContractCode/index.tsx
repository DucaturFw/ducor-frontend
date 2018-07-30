import React, { PureComponent, DetailedHTMLProps } from 'react'
import styled from 'react-emotion'

import Page from 'components/Page'
import { API_URL } from 'config'

interface Props {}

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
    const { form: { provider, pair, updateAfter, retireAfter } } = window.store
    const res = await fetch(`${API_URL}/api/generate/eth/crypto/${provider}/${pair}?updatefreq=${updateAfter}&lifetime=${retireAfter}`)
    const json = await res.json() as State
    this.setState(json)
  }

  render() {
    return (
      <Page title='Contract Code'>
        <Container>
          <Column>
          <Code readOnly value={this.state.contract}/>
          </Column>
          <Column>
            <H1>Instructions</H1>
            <Desc>
              Copy this code to your smart contract.
              Use <InlineCode>request_data()</InlineCode> to request new data from oracle.
              Data will be pushed to <InlineCode>push_data()</InlineCode> in the specified <Link href='#'>format</Link>
              <p>{ this.state.instructions }</p>
            </Desc>
          </Column>
        </Container>
      </Page>
    )
  }
}

const Container = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
})

const Column = styled('div')({
  margin: '4vw'
})

const H1 = styled('h1')(({ theme }) => ({
  color: theme.titleColor,
  fontWeight: 'normal',
  fontSize: '1.4rem',
}))

const Code = styled('textarea')(({ theme }) => ({
  width: '50vw',
  height: '38vh',
  color: theme.menuLinkColor,
  border: '1px solid #DFE0E1',
  borderRadius: '.5rem',
  padding: '2rem',
  boxSizing: 'border-box',
} as any))

const InlineCode = styled('span')(({ theme }) => ({
  fontFamily: 'monospace',
  background: theme.mainBackgroundColor,
  color: theme.menuLinkColor,
  padding: '.25em'
}))

const Desc = styled('div')({
  maxWidth: '19rem',
  lineHeight: '1.64rem',
})

const Link = styled('a')(({ theme }) => ({
  color: theme.activeColor,
  ':hover': {
    color: `lighten(${theme.activeColor}, 50%)`,
  }
}))
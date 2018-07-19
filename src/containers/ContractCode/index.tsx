import React, { PureComponent } from 'react'
import styled from 'react-emotion'

export default class ContractCodePage extends PureComponent {
  render() {
    return (
      <Root>
        <Column>
          <H1>Contract Code</H1>
          <Code>{`
interface IDataConsumer
{
  push_data(data_type, data)
  only oracle

  private request_data(data_type)

  private check_data_age()
  throws
  // throws if data is outdated
  // some contract code
}
          `}</Code>
        </Column>
        <Column>
          <H1>Instructions</H1>
          <Desc>
            Copy this code to your smart contract.
            Use <InlineCode>reuest_data()</InlineCode> to request new data from oracle.
            Data will be pushed to <InlineCode>push_data()</InlineCode> in the specified <a href='#'>format</a>
          </Desc>
        </Column>
      </Root>
    )
  }
}

const Root = styled('div')({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  marginTop: '20vh',
  minHeight: '80vh',
})

const Column = styled('div')({
  padding: '1rem'
})

const H1 = styled('h1')()

const Code = styled('pre')({
  fontSize: '1.1rem'
})

const InlineCode = styled('span')({
  fontFamily: 'monospace',
  background: '#f1f1f1',
  padding: '.25em'
})

const Desc = styled('div')({
  maxWidth: '19rem'
})
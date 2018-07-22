import React, { PureComponent, DetailedHTMLProps } from 'react'
import styled from 'react-emotion'

import Page from 'components/Page'

const code = `interface IDataConsumer
{
  push_data(data_type, data)
  only oracle

  private request_data(data_type)

  private check_data_age()
  throws
  // throws if data is outdated
  // some contract code
}`

export default class ContractCodePage extends PureComponent {
  render() {
    return (
      <Page title='Contract Code'>
        <Container>
          <Column>
          <Code readonly value={code}/>
          </Column>
          <Column>
            <H1>Instructions</H1>
            <Desc>
              Copy this code to your smart contract.
              Use <InlineCode>request_data()</InlineCode> to request new data from oracle.
              Data will be pushed to <InlineCode>push_data()</InlineCode> in the specified <Link href='#'>format</Link>
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
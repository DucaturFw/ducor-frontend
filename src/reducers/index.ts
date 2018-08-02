import { createReducer } from 'redux-act'
import { combineReducers } from 'redux'

import { setConfig, setResults } from 'actions'

export type Contract = string
export type Instructions = string

export interface Category {
  name: string
  types?: string[] // not needed
  providers?: {
    id: string
    name: string
    types: string[]
  }[]
}

export interface StoreState {
  config: Category[],
  contract: Contract,
  instructions: Instructions
}

export const config = createReducer({
  [setConfig.toString()]: (_, payload: Category[]) => payload
}, [])

export const contract = createReducer({
  [setResults.toString()]: (_, { contract }) => contract
}, '')

export const instructions = createReducer({
  [setResults.toString()]: (_, { instructions }) => instructions
}, '')

export default combineReducers({ config, contract, instructions })
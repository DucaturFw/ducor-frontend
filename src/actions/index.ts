import { createAction } from 'redux-act'

import { Category, Contract, Instructions } from 'reducers'

export interface FormToSend {
  provider: string
  pair: string
  updateAfter: string
  retireAfter: string
}

export const setConfig = createAction('set fetched config', (res: Category[]) => res)
export const setResults = createAction('set contract results', (res: { contract: Contract, instructions: Instructions }) => res)
export const sendForm = createAction('send form with params', (res: FormToSend) => res)
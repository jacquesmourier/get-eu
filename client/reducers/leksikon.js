import { combineReducers } from 'redux'
import { TOGGLE_FILTER, TOGGLE_ENTRY } from '../actions/leksikon'
import { without } from 'lodash'
import { filters } from '../Lepo'
import { routerStateReducer } from 'redux-router'
import gaSend from '../utils/gaSend'

const initialFiltersState = {
  enabled: filters.map(f => f.id)
}

export function filtersReducer (state = initialFiltersState, action) {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case TOGGLE_FILTER: {
      newState.enabled = without(newState.enabled, action.id)
      if (action.checked) newState.enabled.push(action.id)
      break
    }
    default: break
  }

  return newState
}

export function entriesReducer (state = { open: [] }, action) {
  let newState = Object.assign({}, state)

  switch (action.type) {
    case TOGGLE_ENTRY: {
      newState.open = without(newState.open, action.id)
      if (action.open) {
        newState.open.push(action.id)
        gaSend('expand', action.id, 'Leksikon')
      }
      break
    }
    default: break
  }

  return newState
}

export function createFinalReducer () {
  return combineReducers({
    router: routerStateReducer,
    filters: filtersReducer,
    entries: entriesReducer
  })
}

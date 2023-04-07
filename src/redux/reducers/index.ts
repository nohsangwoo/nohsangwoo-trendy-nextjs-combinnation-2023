;`use client`

import { HYDRATE } from 'next-redux-wrapper'
import { AnyAction, CombinedState, combineReducers } from 'redux'

import fetchSlice, { FetchState } from '@src/redux/reducers/fetchSlice'
import counterSlice, { CounterState } from './counterSlice'

// nextjs에서 추가된 설정방법
export interface ReducerStates {
  counter: CounterState
  fetchs: FetchState
}

// for server side
const rootReducer = (
  state: ReducerStates,
  action: AnyAction,
): CombinedState<ReducerStates> => {
  // hydration이 발생했을 때 처리하는 부분을 별도로 작성해줍니다.

  //   console.log('action Type!!: ', action.type)
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return combineReducers({
    counter: counterSlice.reducer,
    fetchs: fetchSlice.reducer,
  })(state, action)
}

export default rootReducer

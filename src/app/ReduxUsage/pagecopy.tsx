import counterSlice from '@src/redux/reducers/counterSlice'
import { wrapper } from '@src/redux/store'
import { GetServerSideProps } from 'next'
import React from 'react'

const page = () => {
  return <div>page</div>
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(store => async () => {
    store.dispatch(counterSlice.actions.increase(1))
    console.log('State on server counter', store.getState().counter)

    return {
      props: {},
    }
  })

export default page

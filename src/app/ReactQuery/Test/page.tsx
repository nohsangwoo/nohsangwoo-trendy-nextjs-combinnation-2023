'use client'

import React from 'react'
import { getFetchTodos } from '../AxiosUsage'

const page = () => {
  getFetchTodos()
  return <div>page</div>
}

export default page

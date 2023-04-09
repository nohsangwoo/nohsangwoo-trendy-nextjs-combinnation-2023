import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Content-Type': 'application/json',
      // 'API-Key': process.env.DATA_API_KEY, // if you need, then use
    },
  })
  const data = await res.json()

  return NextResponse.json({ data })
}

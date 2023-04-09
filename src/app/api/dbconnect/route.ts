import { NextResponse } from 'next/server'
import client from 'lib/client'
export async function GET() {
  let data = {}

  const user = await client.user.findMany({})

  console.log('user: ', user)

  data = {
    user: user,
  }

  return NextResponse.json({ data })
}

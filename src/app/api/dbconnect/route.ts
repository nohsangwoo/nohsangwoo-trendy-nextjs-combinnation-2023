import { NextResponse } from 'next/server'
import client from 'lib/client'
import { prisma } from '@pm/db'
export async function GET() {
  let data = {}

  const user = await prisma.user.findMany({})

  console.log('user: ', user)

  data = {
    user: user,
  }

  return NextResponse.json({ data })
}

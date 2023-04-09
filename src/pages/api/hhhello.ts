// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from '@pm/db'
import { Novel } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
// import { $ } from 'zx'

type Data = {
  name: string
  novels: Novel[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  /*   const test = async () => {
    console.log(req.query)
    try {
      const CMD = 'df -h;ls ~/'

      const result =
        await $`(sshpass -p'Xm<0E9WnYxnN' ssh jaehokim@210.90.144.102 -oStrictHostKeyChecking=no -C "sshpass -p'Pl&4lr89mpj7' ssh jaehokim@10.64.28.39 -oStrictHostKeyChecking=no -C "${CMD}"")`

      console.log('result: ', result.stdout)
    } catch (e) {
      console.log('e: ', e)
    }
  }
  test() */
  const novels = await prisma.novel.findMany({})
  console.log('novels result: ', novels)

  res.status(200).json({ name: 'John Doe', novels: novels })
}

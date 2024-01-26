import { PrismaClient } from '@prisma/client'
import { remember } from 'prisma-fns'

const db = new PrismaClient().$extends(remember)

export default db

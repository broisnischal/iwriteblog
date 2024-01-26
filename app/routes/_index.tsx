import type { MetaFunction } from '@remix-run/node'
import { Link, json, useLoaderData } from '@remix-run/react'
import db from '~/db/db.server'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

const linkStyle = 'underline decoration-dotted'

export async function loader() {
  const users = await db.user.findMany()
  return json({ users })
}

export default function Index() {
  const { users } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="flex items-baseline gap-8 bg-blue-300 p-8">
        <img
          src="/images/Remix-Logo-Full-Black.svg"
          alt="Remix Logo"
          className="h-12"
        />
        <h1 className="text-5xl font-bold">Welcome to Remix</h1>
      </div>

      {users.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  )
}

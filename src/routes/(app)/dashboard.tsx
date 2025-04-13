import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useUserAuth } from '../../contexts/auth-context'

export const Route = createFileRoute('/(app)/dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  const { session, logout } = useUserAuth()
  const navigate = useNavigate()

  if (!session) {
    navigate({ to: "/login" })
  }

  return (
    <div className='container mx-auto'>
      <h1>Welcome {session?.user.user_metadata.name}</h1>
      <button onClick={logout}>Sign out</button>
    </div>
  )
}

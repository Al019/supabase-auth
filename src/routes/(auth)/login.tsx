import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useUserAuth } from '../../contexts/auth-context'

export const Route = createFileRoute('/(auth)/login')({
  component: RouteComponent,
})

function RouteComponent() {
  const { session, login } = useUserAuth()
  const navigate = useNavigate()

  if (session) {
    navigate({ to: "/dashboard" })
  }

  return (
    <div>
      <button onClick={login}>Sign in with Google</button>
    </div>
  )
}

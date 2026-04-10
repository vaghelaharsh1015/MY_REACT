import { useContext } from 'react'
import { UserContext } from './UserContext.jsx'

function UserStatus() {
  const { user } = useContext(UserContext)

  return <p>{user ? `Welcome ${user.name}` : 'Not Logged In'}</p>
}

export default UserStatus

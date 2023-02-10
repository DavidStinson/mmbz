import styles from './Landing.module.css'
import { User } from '../../types/models'
import * as authService from '../../services/authService'

interface LandingProps {
  user: User | null,
  handleLogout: () => void
}

const Landing = ({ user, handleLogout }: LandingProps) => {

  const handleDeleteAccount = async() => {
    await authService.deleteAccount()
    handleLogout()
  }

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      { user && 
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing

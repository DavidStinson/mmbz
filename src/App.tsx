// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as voteService from './services/voteService'

// types
import { Profile } from './types/models'

// styles
import './App.css'

function App() {
  const [user, setUser] = useState(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProfiles = async() => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    if(user) fetchProfiles()
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleVote = async(formData: {value: number, profileId: number }) => {
    const updatedProfile = await voteService.create(formData)

    setProfiles(profiles.map((profile: Profile) => (
      profile.id === updatedProfile.id ? updatedProfile : profile
    )))
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} handleLogout={handleLogout} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles profiles={profiles} handleVote={handleVote} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App

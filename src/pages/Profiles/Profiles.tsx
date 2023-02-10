import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[]
}

const Profiles = ({ profiles }: ProfilesProps) => {
  if(!profiles.length) return <h1>Loading</h1>

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <p key={profile.id.toString()}>{profile.name}</p>
      )}
    </main>
  )
}
 
export default Profiles
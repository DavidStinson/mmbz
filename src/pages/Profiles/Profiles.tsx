import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { Profile } from '../../types/models'

interface ProfilesProps {
  profiles: Profile[],
  handleVote: (formData: {value: number, profileId: number }) => void;
}

const Profiles = ({ profiles, handleVote }: ProfilesProps) => {
  if(!profiles.length) return <h1>Loading</h1>

  return (
    <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard 
          key={profile.id.toString()}
          profile={profile}
          handleVote={handleVote}
        />
      )}
    </main>
  )
}
 
export default Profiles
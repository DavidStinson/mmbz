import { PromiseProvider } from 'mongoose';
import defaultPic from '../../assets/icons/profile.png'
import { Profile } from '../../types/models'

interface ProfileCardProps {
  profile: Profile,
  handleVote: () => void
}

const ProfileCard = ({ profile, handleVote }: ProfileCardProps) => {
  const profilePic = profile.avatar ? profile.avatar : defaultPic

  return ( 
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
    </article>
  );
}
 
export default ProfileCard;
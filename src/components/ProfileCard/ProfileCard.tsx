import { PromiseProvider } from 'mongoose';
import defaultPic from '../../assets/icons/profile.png'
import { Profile } from '../../types/models'

const ProfileCard = ({ profile }: Profile) => {
  const profilePic = profile.avatar ? profile.avatar : defaultPic

  return ( 
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
    </article>
  );
}
 
export default ProfileCard;
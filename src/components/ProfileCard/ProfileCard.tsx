import VoteManager from '../VoteManager/VoteManager'
import defaultPic from '../../assets/icons/profile.png'

import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms';

export interface profileCardProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => void;
}

const ProfileCard = (props: profileCardProps): JSX.Element => {
  const { profile }: profileCardProps = props

  const profilePic = profile.avatar ? profile.avatar : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar`} />
      <h1>{profile.name}</h1>
      <VoteManager { ...props } />
    </article>
  )
}

export default ProfileCard

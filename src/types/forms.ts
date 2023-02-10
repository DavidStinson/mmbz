import { Profile } from './models'

export interface FormProps {
  handleSignupOrLogin: () => void,
  updateMessage: (msg: string) => void
}
export interface LoginSignupFormProps {
  handleSignupOrLogin: () => void,
  updateMessage: (msg: string) => void
}

export interface VoteHandlerProps {
  profile: Profile,
  handleVote: (formData: {value: number, profileId: number }) => void
}
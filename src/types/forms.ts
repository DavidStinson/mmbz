export interface LoginSignupFormProps {
  handleSignupOrLogin: () => void;
  updateMessage: (msg: string) => void;
}

export interface LoginFormData {
  email: string;
  pw: string;
}

export interface SignupFormData {
  name: '';
  email: '';
  password: '';
  passwordConf: '';
}

export interface ChangePasswordFormData {
  pw: string;
  newPw: string;
  newPwConf: string;
}

export interface VoteManagerFormData {
  value: number;
  profileId: number;
}

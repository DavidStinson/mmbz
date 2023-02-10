export interface Profile {
  name: string,
  photo: string,
  id: number,
  avatar?: string,
  votesReceived: string[],
  votesGiven: string[],
}

export interface User {
  name: string,
  email: string,
  profile: { id: number },
  id: number
}
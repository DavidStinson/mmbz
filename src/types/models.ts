export interface Profile {
  name: string,
  photo: string,
  id: number,
  avatar?: string,
  votesReceived: {value: number, profileId: number, voterId: number}[],
  votesGiven: {value: number, profileId: number, voterId: number}[],
}

export interface User {
  name: string,
  email: string,
  profile: { id: number },
  id: number
}
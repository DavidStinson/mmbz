import { useState } from 'react'

import useSound from 'use-sound'
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'

import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms'

export interface VoteManagerProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => void;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
  const { profile, handleVote }: VoteManagerProps = props

  const [hover, setHover] = useState<string | null>(null)

  const [rateUp] = useSound(upMeow, { volume: 0.2 })
  const [rateDown] = useSound(downMeow, { volume: 0.2 })

  const voteCount: number = profile.votesReceived.length

  const total: number = profile.votesReceived.reduce(
    (sum: number, v: { value: number }): number => {
      return sum + v.value
    },
    0
  )

  const rating: number = voteCount ? total / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
    const newValue = parseInt(evt.currentTarget.id) + 1
    newValue > rating ? rateUp() : rateDown()
    handleVote({ value: newValue, profileId: profile.id })
  }

  const handleHover = (evt: React.MouseEvent): void => {
    if (evt.type === 'mouseover') {
      setHover(evt.currentTarget.id)
    } else if (evt.type === 'mouseleave') {
      setHover(null)
    }
  }

  return (
    <section>
      {Array.from({ length: 5 }, (el: never, idx: number): JSX.Element => (
        <img
          id={idx.toString()}
          key={idx.toString()}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          src={idx <= (hover ?? rating - 1) ? bean : noBean}
          alt="Bean Symbol"
        />
      ))}
    </section>
  )
}

export default VoteManager

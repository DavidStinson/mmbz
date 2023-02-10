import { useState } from 'react'
import useSound from 'use-sound'
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'
import { VoteHandlerProps } from '../../types/forms'


const VoteManager = ({ profile, handleVote }: VoteHandlerProps) => {
  const [hover, setHover] = useState<string | null>(null)

  const [rateUp] = useSound(upMeow, { volume: 0.2 })
  const [rateDown] = useSound(downMeow, { volume: 0.2 })

  const voteCount = profile.votesReceived.length
  const total: number = profile.votesReceived.reduce((sum: number, v: { value: number }) => {
    return sum + v.value
  }, 0)
  const rating = voteCount ? total / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement>) => {
    const img = evt.currentTarget
    const newValue = parseInt(img.id) + 1
    newValue > rating ? rateUp() : rateDown()
    handleVote({ value: newValue, profileId: profile.id })
  }

  const handleHover = (evt: React.MouseEvent<HTMLImageElement>) => {
    const img = evt.currentTarget

    if(evt.type === 'mouseover'){
      setHover(img.id)
    } else if (evt.type === 'mouseleave'){
      setHover(null)
    }
  }

  return ( 
    <section>
      {Array.from({ length: 5 }, ((el: never, idx: number) => (
        <img 
          id={idx.toString()}
          key={idx.toString()}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          src={idx <= (hover ?? rating -1) ? bean : noBean} alt="Bean Symbol"
        />
      )))}
    </section>
   );
}
 
export default VoteManager;
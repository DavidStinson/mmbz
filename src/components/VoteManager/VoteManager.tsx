import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'
import { Profile } from '../../types/models'

interface VoteManagerProps {
  profile: Profile
}

const VoteManager = ({ profile }: VoteManagerProps) => {
  const voteCount = profile.votesReceived.length
  const total = profile.votesReceived.reduce((sum: number, v: { value: number }) => sum + v.value, 0)
  const rating = voteCount ? total / voteCount : 1

  return ( 
    <section>
      {Array.from({ length: 5 }, ((el: never, idx: number) => (
        <img 
          id={idx.toString()}
          key={idx.toString()}
          src={idx < rating ? bean : noBean} alt="Bean Symbol"
        />
      )))}
    </section>
   );
}
 
export default VoteManager;
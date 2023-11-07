import { Mail } from 'lucide-react'
import {
  MeanOfContactItemUsingImage,
  MeanOfContactItemUsingIcon,
} from './means-of-contatct-item'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'

export function MeansOfContactList() {
  return (
    <div className="flex flex-col gap-8">
      <MeanOfContactItemUsingImage
        icon={Mail}
        content="gustavodiasa2121@gmail.com"
        message="Mail me at"
        url="/"
      />

      <MeanOfContactItemUsingIcon
        icon={githubImg}
        content="gustavodiasa2121@gmail.com"
        message="Mail me at"
        url="/"
      />

      <MeanOfContactItemUsingIcon
        icon={linkedinImg}
        content="gustavodiasa2121@gmail.com"
        message="Mail me at"
        url="/"
      />
    </div>
  )
}

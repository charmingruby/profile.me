import { Mail } from 'lucide-react'
import {
  MeanOfContactItemUsingImage,
  MeanOfContactItemUsingIcon,
} from './means-of-contact-item'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import { email, githubUrl, linkedinUrl } from '@/site/contact'

export function MeansOfContactList() {
  return (
    <div className="flex flex-row justify-center sm:justify-start sm:flex-col gap-4 lg:gap-8">
      <MeanOfContactItemUsingImage
        icon={Mail}
        content={email}
        message="Mail me at"
        url="https://mail.google.com/mail/?view=cm&source=mailto&to=[gustavodiasa2121@gmail.com]"
      />

      <MeanOfContactItemUsingIcon
        icon={githubImg}
        content={githubUrl}
        message="Check repos at"
        url={githubUrl}
      />

      <MeanOfContactItemUsingIcon
        icon={linkedinImg}
        content={linkedinUrl}
        message="Let's connect"
        url={linkedinUrl}
      />
    </div>
  )
}

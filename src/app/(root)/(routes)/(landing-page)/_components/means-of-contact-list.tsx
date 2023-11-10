import { Mail } from 'lucide-react'
import { MeanOfContactItem } from './means-of-contact-item'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import { githubUrl, linkedinUrl } from '@/site/contact'

export function MeansOfContactList() {
  return (
    <div className="flex items-center justify-center  gap-4 lg:gap-8">
      <MeanOfContactItem
        icon={Mail}
        url="https://mail.google.com/mail/?view=cm&source=mailto&to=[gustavodiasa2121@gmail.com]"
      />

      <MeanOfContactItem image={githubImg} url={githubUrl} />

      <MeanOfContactItem image={linkedinImg} url={linkedinUrl} />
    </div>
  )
}

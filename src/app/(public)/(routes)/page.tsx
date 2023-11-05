import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { SocialLink } from './components/social-link'
import { githubUrl, linkedinUrl } from '@/site/contact'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import { RoleBadge } from './components/role-badge'
import heroImg from '@/assets/hero.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <MaxWidthWrapper className="h-screen flex items-center">
        <div className="grid grid-cols-2 gap-12 ">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-6xl my-0">
              Hello, I{"'"}m Gustavo Dias
            </h1>

            <div className="flex items-center gap-4 mt-4">
              <RoleBadge role="Full Stack" />
              <RoleBadge role="Front End" />
              <RoleBadge role="Back End" />
            </div>

            <p className="font-medium text-gray-palette-200 mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, quae! Autem qui quos esse illum architecto quasi ipsam
              in adipisci pariatur incidunt hic nihil nesciunt eum optio
              nostrum, quaerat officia.
            </p>

            <div className="flex items-center gap-8 mt-12">
              <SocialLink imageUrl={githubImg} name="Github" url={githubUrl} />
              <SocialLink
                imageUrl={linkedinImg}
                name="Linkedin"
                url={linkedinUrl}
              />
            </div>
          </div>

          <div className="flex items-center">
            <Image src={heroImg} alt="" />
          </div>
        </div>
      </MaxWidthWrapper>
    </>
  )
}

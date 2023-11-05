import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { SocialLink } from './components/social-link'
import { githubUrl, linkedinUrl } from '@/site/contact'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import { RoleBadge } from './components/role-badge'
import heroImg from '@/assets/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import profileImg from '@/assets/profile-img.png'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { Badge } from '@/components/badge'
import { IntroductionWrapper } from '@/components/introduction-wrapper'
import { ChevronDown } from 'lucide-react'
import nxtImg from '@/assets/technologies/nextjs-original.svg'
import { SkillItem } from './components/skill-item'

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero */}
      <MaxWidthWrapper className="mt-20 lg:mt-0 lg:h-screen flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="flex flex-col justify-center">
            <RoleBadge role="Full Stack Developer" />

            <h1 className="font-bold text-6xl my-0 mt-8 text-gray-palette-0">
              Hello, I{"'"}m Gustavo Dias
            </h1>

            <p className="font-medium text-gray-palette-200 mt-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, quae! Autem qui quos esse illum architecto quasi ipsam
              in adipisci pariatur incidunt hic nihil nesciunt eum optio
              nostrum, quaerat officia{' '}
              <Link
                prefetch={false}
                href="/"
                className="text-gray-palette-0 underline underline-offset-1"
              >
                Apperize
              </Link>
              .
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

        <div className="bottom-16 right-1/2 absolute border border-border rounded-full h-12 flex items-end">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>
      </MaxWidthWrapper>

      {/* Journey */}
      <MaxWidthWrapper className="grid grid-cols-2 gap-8">
        <div className="flex items-center">
          <Image src={profileImg} alt="" className="rounded-xl w-4/5" />
        </div>
        <div className="flex flex-col justify-center">
          <IntroductionWrapper>
            <Badge>About me</Badge>
            <Heading>Journey</Heading>
          </IntroductionWrapper>

          <div className="flex flex-col gap-4">
            <Paragraph>
              Hello! My name is Gustavo, and I am passionate about crafting
              dynamic experiences. My journey into web development began in 2020
              when I started at Computer Science university at Federal
              University of Juiz de Fora(UFJF) and had the opportunity to join a
              Junior Company, my first foray into the world of software
              development.
            </Paragraph>
            <Paragraph>
              One particular moment stands out as a pivotal turning point in my
              programming journey: building an E-Commerce website from scratch ,
              despite having no prior knowledge. This endeavor compelled me to
              swiftly acquire skills in HTML/CSS for frontend interfaces and PHP
              with MySQL for backend functionality. Although it was a
              challenging and occasionally stressful undertaking, the sense of
              reward and fulfillment I experienced was unparalleled.
            </Paragraph>
            <Paragraph>
              Since then, I have been immersing myself in the realm of
              JavaScript since 2021. While initially captivated by frontend
              development, I have since broadened my horizons and aspire to gain
              proficiency in every facet of the development process. My
              continuous dedication to learning and mastering various aspects of
              web development fuels my growth and fuels my enthusiasm for this
              ever-evolving field
            </Paragraph>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Skills */}
      <MaxWidthWrapper>
        <IntroductionWrapper>
          <Badge>Skills</Badge>
          <Heading>Technologies Knowledge</Heading>
        </IntroductionWrapper>

        <div className="grid grid-cols-3 gap-8">
          <SkillItem
            icon={nxtImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab. Laborum est repellendus molestias quibusdam dolores laudantium aliquam esse."
          />
          <SkillItem
            icon={nxtImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab. Laborum est repellendus molestias quibusdam dolores laudantium aliquam esse."
          />
          <SkillItem
            icon={nxtImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab. Laborum est repellendus molestias quibusdam dolores laudantium aliquam esse."
          />
        </div>
      </MaxWidthWrapper>

      {/* Projects */}
      <section className="">
        <MaxWidthWrapper>
          <IntroductionWrapper>
            <Badge>Projects</Badge>
            <Heading>What I{"'"}ve been working</Heading>
          </IntroductionWrapper>
        </MaxWidthWrapper>
      </section>

      {/* Experiences */}
      <MaxWidthWrapper>
        <IntroductionWrapper>
          <Badge>Projects</Badge>
          <Heading>What I{"'"}ve been working</Heading>
        </IntroductionWrapper>
      </MaxWidthWrapper>

      {/* Contact */}
      <MaxWidthWrapper>
        <IntroductionWrapper>
          <Badge>Projects</Badge>
          <Heading>What I{"'"}ve been working</Heading>
        </IntroductionWrapper>
      </MaxWidthWrapper>
    </div>
  )
}

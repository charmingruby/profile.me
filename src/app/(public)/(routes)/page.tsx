import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { githubUrl, linkedinUrl } from '@/site/contact'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import heroImg from '@/assets/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import profileImg from '@/assets/profile-img.png'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { Badge } from '@/components/badge'
import { IntroductionWrapper } from '@/components/introduction-wrapper'
import { ChevronDown, Rocket } from 'lucide-react'

/**
 * Static for moment
 */
import nxtImg from '@/assets/technologies/nextjs-original.svg'
import graphQlImg from '@/assets/technologies/graphql-plain.svg'
import elixirImg from '@/assets/technologies/elixir-original.svg'
import dockerImg from '@/assets/technologies/docker-plain.svg'
import nodeImg from '@/assets/technologies/nodejs-original.svg'
import phoenixImg from '@/assets/technologies/phoenix-original.svg'
import { RoleBadge } from './_components/role-badge'
import { SkillItem } from './_components/skills/skill-item'
import { SocialLink } from './_components/social-link'
import { TimelineItem } from './_components/experiences/timeline-item'
import { MeansOfContactList } from './_components/contact/means-of-contact-list'

export default function Home() {
  return (
    <div className="space-y-20 w-full">
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
          </div>

          <div className="flex items-center">
            <Image src={heroImg} alt="" />
          </div>
        </div>

        <div className="bottom-16 right-1/2 absolute border border-border rounded-full h-10 flex items-end">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>
      </MaxWidthWrapper>

      {/* Journey */}
      <MaxWidthWrapper className="grid grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <div className="max-w-xs p-1 lg:max-w-sm relative rounded-xl border border-secondary-main ">
            <Image
              src={profileImg}
              alt=""
              className="rounded-lg aspect-square object-cover z-10"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <IntroductionWrapper>
            <Badge>About me</Badge>
            <Heading>Journey</Heading>
          </IntroductionWrapper>

          <div className="flex flex-col gap-3">
            <Paragraph>
              Developer during the day and still a developer during the night. I
              started my journey in 2021, acting as a Freelancer and Projects
              Assistant, gaining valuable experience along the way. With this
              extensive experience, I took the bold step of founding my own
              software house, Apperize, specializing in custom software
              development.
            </Paragraph>
            <Paragraph>
              My passion lies in cultivating collaboration and igniting
              innovation within teams to produce groundbreaking solutions that
              drive business success. I{"'"}m perpetually committed to
              continuous learning, ensuring I remain at the forefront of market
              trends. I thrive on consistently pushing the boundaries of
              technology and creativity. I genuinely live and breathe technology
              24/7.
            </Paragraph>

            <div className="flex items-center gap-8 mt-4">
              <SocialLink imageUrl={githubImg} name="Github" url={githubUrl} />
              <SocialLink
                imageUrl={linkedinImg}
                name="Github"
                url={linkedinUrl}
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Skills */}
      <MaxWidthWrapper>
        <IntroductionWrapper className="items-center">
          <Badge>Skills</Badge>
          <Heading>Technologies Knowledge</Heading>
        </IntroductionWrapper>

        <div className="grid grid-cols-3 gap-8">
          <SkillItem
            icon={nxtImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
          />
          <SkillItem
            icon={graphQlImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
          />
          <SkillItem
            icon={elixirImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
          />

          <SkillItem
            icon={dockerImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
          />
          <SkillItem
            icon={nodeImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
          />
          <SkillItem
            icon={phoenixImg}
            name="Next.js"
            context="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius ipsam quod at quasi ab."
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
      <section className="bg-gradient-to-br from-primary-600 to-black w-full py-10 border border-primary-300">
        <MaxWidthWrapper className="w-full">
          {/* Timeline */}
          <div className="max-w-3xl mx-auto">
            <IntroductionWrapper className="w-full items-center">
              <Badge>Experiences</Badge>
              <Heading>Timeline</Heading>
            </IntroductionWrapper>

            <div className="flex flex-col">
              <ul className="relative border-l border-dashed border-gray-200 dark:border-gray-700">
                <TimelineItem />
                <TimelineItem />
              </ul>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact */}
      <MaxWidthWrapper className="grid grid-cols-2 gap-12">
        <div className="flex flex-col">
          <div>
            <Heading>Let{"'"}s chat.</Heading>
            <Heading>Tell me what you need.</Heading>
          </div>

          <div className="mt-6">
            <strong>Let{"'"}s do something together.</strong>
          </div>

          <MeansOfContactList />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2">
            <strong>Send me a message</strong>
            <Rocket />
          </div>

          <div className="flex flex-col gap-4">
            {/* Full name */}
            <input
              placeholder="Full name*"
              className="bg-primary-300 border border-border h-12 px-3 py-2 w-full rounded-full outline-none focus:ring-2 ring-secondary-main"
            />

            {/* Email address */}
            <input
              placeholder="Full name*"
              className="bg-primary-300 border border-border px-3 py-2 w-full rounded-full outline-none focus:ring-2 ring-secondary-main"
            />

            {/* Subject */}
            <input
              placeholder="Full name*"
              className="bg-primary-300 border border-border px-3 py-2 w-full rounded-full outline-none focus:ring-2 ring-secondary-main"
            />

            {/* Message */}
            <input
              placeholder="Full name*"
              className="bg-primary-300 border border-border px-3 py-2 w-full rounded-full outline-none focus:ring-2 ring-secondary-main"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

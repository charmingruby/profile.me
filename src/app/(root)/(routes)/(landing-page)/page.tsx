import { MaxWidthWrapper } from '@/components/ui/max-width-wrapper'
import { githubUrl, linkedinUrl } from '../../../../site/contact'
import githubImg from '@/assets/socials/github.svg'
import linkedinImg from '@/assets/socials/linkedin.svg'
import heroImg from '@/assets/hero.svg'
import Image from 'next/image'
import Link from 'next/link'
import profileImg from '@/assets/gustavo-dias-profile.jpeg'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { SectionBadge } from '@/components/section-badge'
import { IntroductionWrapper } from '@/components/introduction-wrapper'
import { ChevronDown } from 'lucide-react'
import { SkillItem } from './_components/skill-item'
import { SocialLink } from './_components/social-link'
import { MeansOfContactList } from './_components/means-of-contact-list'
import { skills } from '../../../../data/skills'
import { Annotation } from '@/components/annotation'
import { Timeline } from './_components/timeline'
import { Button } from '@/components/ui/button'
import { CurrentStack } from './_components/current-stack'
import { CVDownloadButton } from './_components/cv-download-button'
import { PinnedProjects } from './_components/pinned-projects'
import Metadata from 'next'

export const metadata: Metadata = {
  title: 'Gustavo Dias | Portfolio',
  description: "Gustavo's Personal portfolio.",
}

export default function Home() {
  return (
    <div className=" w-full">
      {/* Hero */}
      <MaxWidthWrapper className="mt-20 h-auto lg:mt-0 lg:h-screen flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <div className="text-center w-full lg:text-start">
              <span className="font-semibold text-lg text-gray-palette-0">
                Full Stack Developer
              </span>

              <h1 className="font-bold my-0 mt-8 text-white text-5xl sm:text-5xl ">
                Hello, I{"'"}m
              </h1>

              <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-secondary-light via-[#00F5D4] to-secondary-main text-transparent font-bold my-0">
                Gustavo Dias
              </h1>
            </div>

            <CurrentStack />

            {/* Description */}
            <p className="text-center font-medium text-gray-palette-200 mt-8 leading-relaxed lg:text-start max-w-lg mx-auto lg:mx-0">
              Always aiming to build scalable, reactive and modern applications
              for the web with what is new in the market.
            </p>

            {/* Socials */}
            <div className="flex justify-center items-center gap-6 mt-16 lg:justify-start">
              <SocialLink imageUrl={githubImg} name="Github" url={githubUrl} />
              <SocialLink
                imageUrl={linkedinImg}
                name="Github"
                url={linkedinUrl}
              />

              <CVDownloadButton />
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Image
              src={heroImg}
              alt="Illustration with techonologies"
              className="w-full"
              quality={100}
              priority
            />
          </div>
        </div>

        <div className="bottom-16 right-1/2 absolute border border-border rounded-full h-10 hidden items-end lg:flex">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>

        <div className=" -z-10 absolute h-full w-full bg-[radial-gradient(#333333,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </MaxWidthWrapper>

      {/* Journey */}
      <section id="about" className="scroll-mt-16">
        <MaxWidthWrapper className="grid grid-cols-1 gap-8 mt-16 lg:mt-28 md:grid-cols-2">
          <div className="flex justify-center items-center order-last md:order-first">
            <div className="max-w-xs p-1 lg:max-w-sm relative rounded-xl border border-secondary-main ">
              <Image
                src={profileImg}
                alt="Gustavo Dias's avatar"
                className="rounded-lg  aspect-square object-cover z-10"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <IntroductionWrapper className="lg:mb-6">
              <SectionBadge>About me</SectionBadge>
              <Heading>Journey</Heading>
            </IntroductionWrapper>

            <div className="flex flex-col gap-3">
              <Paragraph>
                Developer during the day and still a developer during the night.
                I started my journey in 2021, acting as a Freelancer and
                Projects Assistant, gaining valuable experience along the way.
                With this extensive experience, I took the bold step of founding
                my own software house, Apperize, specializing in custom software
                development.
              </Paragraph>
              <Paragraph>
                My passion lies in cultivating collaboration and igniting
                innovation within teams to produce groundbreaking solutions that
                drive business success. I{"'"}m perpetually committed to
                continuous learning, ensuring I remain at the forefront of
                market trends. I thrive on consistently pushing the boundaries
                of technology and creativity. I genuinely live and breathe
                technology 24/7.
              </Paragraph>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-16">
        <MaxWidthWrapper className="mt-16 lg:mt-28">
          <IntroductionWrapper className="lg:text-center lg:items-center">
            <SectionBadge>Skills</SectionBadge>
            <Heading>Technologies with proficiency</Heading>
            <Annotation>Current preferred stacks to work with.</Annotation>
          </IntroductionWrapper>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-8">
            {skills.map(({ name, logo, category }) => (
              <SkillItem
                key={name}
                icon={logo}
                name={name}
                category={category}
              />
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Projects */}
      <section id="projects" className="scroll-mt-16">
        <MaxWidthWrapper className="mt-16 lg:mt-28">
          <IntroductionWrapper>
            <SectionBadge>Projects</SectionBadge>

            <Heading>What I{"'"}ve been working</Heading>
          </IntroductionWrapper>

          <PinnedProjects />

          <div className="flex justify-center w-full mt-8">
            <Link href="/projects" prefetch={false}>
              <Button size="lg">
                <span className="font-medium">View all</span>
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Experiences */}
      <section
        id="experiences"
        className="
          bg-gradient-to-br from-primary-600 to-gray-palette-950 border border-border 
          my-8 py-8 px-6 md:px-16 lg:pt-10 lg:pb-20 lg:px-0 lg:my-14 scroll-mt-16 
        "
      >
        <MaxWidthWrapper>
          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            <IntroductionWrapper className="w-full items-center">
              <SectionBadge>Experiences</SectionBadge>
              <Heading>Timeline</Heading>
            </IntroductionWrapper>

            <Timeline />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-16">
        <MaxWidthWrapper className="flex flex-col justify-center gap-4 py-12 mb-14">
          <div className="flex w-full justify-center">
            <SectionBadge>Contact</SectionBadge>
          </div>
          <div className="w-full">
            <IntroductionWrapper className="mb-8 text-center">
              <div className="flex flex-col gap-2">
                <Heading>Let{"'"}s network.</Heading>
                <Heading>Tell me what you need.</Heading>
              </div>
            </IntroductionWrapper>

            <MeansOfContactList />
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}

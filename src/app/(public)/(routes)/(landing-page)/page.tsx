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
import { ChevronDown, ChevronRight, Mail } from 'lucide-react'
import { SkillItem } from './_components/skill-item'
import { SocialLink } from './_components/social-link'
import { MeansOfContactList } from './_components/means-of-contact-list'
import { skills } from '../../../../mocks/skills'
import { Annotation } from '@/components/annotation'
import { EmailForm } from './_components/email-form'
import { ProjectItem } from './_components/project-item'
import { Timeline } from './_components'
import { Button } from '@/components/ui/button'
import { CurrentStack } from './_components/current-stack'
import { CVDownloadButton } from './_components/cv-download-button'

export default function Home() {
  return (
    <div className=" w-full">
      {/* Hero */}
      <MaxWidthWrapper className="mt-20 h-auto lg:mt-0 lg:h-screen flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          <div className="flex flex-col justify-center">
            {/* Heading */}
            <div className="text-center w-full lg:text-start">
              <h1 className="font-bold my-0 mt-8 text-white text-5xl sm:text-6xl ">
                Hello, I{"'"}m
              </h1>

              <h1 className="text-5xl bg-clip-text bg-gradient-to-r from-secondary-light via-[#00F5D4] to-secondary-main text-transparent font-bold my-0 sm:text-6xl">
                Gustavo Dias
              </h1>
            </div>

            <CurrentStack />

            {/* Description */}
            <p className="text-center font-medium text-gray-palette-200 mt-8 leading-relaxed lg:text-start max-w-lg mx-auto">
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
            />
          </div>
        </div>

        <div className="bottom-16 right-1/2 absolute border border-border rounded-full h-10 hidden items-end lg:flex">
          <ChevronDown className="h-7 w-7 animate-bounce" />
        </div>
      </MaxWidthWrapper>

      {/* Journey */}
      <section id="about">
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
      <section id="skills">
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
      <section id="projects">
        <MaxWidthWrapper className="mt-16 lg:mt-28">
          <IntroductionWrapper>
            <SectionBadge>Projects</SectionBadge>

            <Heading>What I{"'"}ve been working</Heading>
          </IntroductionWrapper>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
          </div>

          <div className="flex justify-center w-full mt-8">
            <Link href="/projects" prefetch={false}>
              <Button size="lg">
                <span className="font-medium">View all</span>
                <ChevronRight className="h-5 w-5 mb-px" strokeWidth={2} />
              </Button>
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Experiences */}
      <section
        id="experiences"
        className="my-8 lg:my-14 bg-gradient-to-br from-primary-600 to-gray-palette-950 w-full py-8 lg:pt-10 lg:pb-20 border-y border-border"
      >
        <MaxWidthWrapper className="w-full">
          {/* Timeline */}
          <div className="max-w-2xl mx-auto">
            <IntroductionWrapper className="w-full lg:items-center">
              <SectionBadge>Experiences</SectionBadge>
              <Heading>Timeline</Heading>
            </IntroductionWrapper>

            <Timeline />
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Contact */}
      <section id="contact">
        <MaxWidthWrapper className="flex flex-col justify-center gap-4 py-0 lg:py-12 mb-8 lg:mb-14">
          <div className="flex w-full justify-center sm:justify-start">
            <SectionBadge>Contact</SectionBadge>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="w-full">
              <IntroductionWrapper className="mb-8 text-center sm:text-start">
                <div className="flex flex-col gap-2">
                  <Heading>Let{"'"}s network.</Heading>
                  <Heading>Tell me what you need.</Heading>
                </div>
              </IntroductionWrapper>

              <MeansOfContactList />
            </div>

            <div className="flex flex-col justify-center">
              <div className="hidden sm:flex flex-col sm:flex-row items-center gap-2 mb-4 text-gray-400">
                <Mail className="h-4 w-4 mb-px" />
                <h3 className="text-lg font-medium">Feel free to message me</h3>
              </div>
              <EmailForm />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  )
}

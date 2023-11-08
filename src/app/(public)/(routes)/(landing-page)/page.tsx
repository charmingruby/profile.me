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
import { ChevronDown, ChevronRight, Download, Mail } from 'lucide-react'
import { RoleBadge } from './_components/role-badge'
import { SkillItem } from './_components/skill-item'
import { SocialLink } from './_components/social-link'
import { MeansOfContactList } from './_components/means-of-contact-list'
import { skills } from '../../../../mocks/skills'
import { Annotation } from '@/components/annotation'
import { EmailForm } from './_components/email-form'
import { ProjectItem } from './_components/project-item'
import { Timeline } from './_components'

export default function Home() {
  return (
    <div className=" w-full">
      {/* Hero */}
      <MaxWidthWrapper className="mt-20 lg:mt-0 lg:h-screen flex items-center relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="flex flex-col justify-center">
            <RoleBadge role="Full Stack Developer" />

            {/* Heading */}
            <h1 className="font-bold text-6xl my-0 mt-8 text-gray-palette-0">
              Hello, I{"'"}m Gustavo Dias
            </h1>

            {/* Description */}
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

            {/* Socials */}
            <div className="flex items-center gap-8 mt-16">
              <SocialLink imageUrl={githubImg} name="Github" url={githubUrl} />
              <SocialLink
                imageUrl={linkedinImg}
                name="Github"
                url={linkedinUrl}
              />
              <div className="flex items-center gap-2 border border-border px-3 py-1.5 rounded-full">
                <strong>Download CV</strong>
                <Download className="h-4 w-4 mt-px" />
              </div>
            </div>
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
      <MaxWidthWrapper className="grid grid-cols-2 gap-8 mt-28">
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
          <IntroductionWrapper className="mb-6">
            <SectionBadge>About me</SectionBadge>
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
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Skills */}
      <MaxWidthWrapper className="mt-28">
        <IntroductionWrapper className="items-center">
          <SectionBadge>Skills</SectionBadge>
          <Heading>Technologies with proficiency</Heading>
          <Annotation>Current preferred stacks to work with.</Annotation>
        </IntroductionWrapper>

        <div className="grid grid-cols-5 gap-8">
          {skills.map(({ name, logo, category }) => (
            <SkillItem key={name} icon={logo} name={name} category={category} />
          ))}
        </div>
      </MaxWidthWrapper>

      {/* Projects */}
      <MaxWidthWrapper className="mt-28">
        <IntroductionWrapper>
          <SectionBadge>Projects</SectionBadge>

          <div className="flex justify-between items-center">
            <Heading>What I{"'"}ve been working</Heading>

            <Link
              href="/"
              prefetch={false}
              className="flex items-center gap-1 text-gray-palette-300"
            >
              <span className="font-medium">View all</span>
              <ChevronRight className="h-4 w-4 mb-px" />
            </Link>
          </div>
        </IntroductionWrapper>

        <div className="grid grid-cols-2 gap-8">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </MaxWidthWrapper>

      {/* Experiences */}
      <section className="my-14 bg-gradient-to-br from-primary-600 to-black w-full pt-10 pb-20 border-y border-border">
        <MaxWidthWrapper className="w-full">
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
      <MaxWidthWrapper className="flex flex-col gap-4 mb-14">
        <SectionBadge>Contact</SectionBadge>

        <div className="grid grid-cols-2 gap-8">
          <div className="w-full">
            <IntroductionWrapper className="mb-8">
              <div className="flex flex-col gap-2 ">
                <Heading>Let{"'"}s network.</Heading>
                <Heading>Tell me what you need.</Heading>
              </div>
            </IntroductionWrapper>

            <MeansOfContactList />
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4 text-gray-400">
              <Mail className="h-4 w-4 mb-px" />
              <h3>Feel free to message me</h3>
            </div>
            <EmailForm />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  )
}

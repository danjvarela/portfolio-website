import Copyright from '@/components/copyright';
import Project from '@/components/project';
import Section from '@/components/section';
import SocialLink from '@/components/social-link';
import projects from '@/data/projects';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export default function Home() {
  return (
    <div
      className={cn(
        'mx-auto flex flex-col justify-center items-center',
        'md:flex-row',
      )}
    >
      <div
        className={cn(
          'w-full h-fit flex flex-col',
          'md:w-1/2 md:max-w-lg md:h-screen md:fixed md:right-1/2 md:top-0',
        )}
      >
        <Section className="md:h-full pt-12 md:pt-24">
          <h1 className="mb-2 text-mint-12">Dan Varela</h1>
          <h2 className="mt-0 text-mint-11">Web Developer</h2>
          <p className="mb-8">
            Hi there! I'm a passionate web developer with a versatile skill set,
            specializing in React.
            <br />
            Explore my projects and see how I can help bring your digital ideas
            to life!
          </p>
          <div className="flex gap-4 mb-4 md:mb-8">
            <SocialLink href="#" icon={<BsGithub />} />
            <SocialLink href="#" icon={<BsLinkedin />} />
          </div>
          <div className="hidden md:flex flex-col gap-2">
            <Link href="#about" className="">
              About
            </Link>
            <Link href="#projects" className="">
              Projects
            </Link>
          </div>
        </Section>
        <Copyright className="px-4 mb-7 hidden md:block" />
      </div>

      <div
        className={cn(
          'w-full h-fit',
          'md:w-1/2 md:max-w-lg md:translate-x-1/2',
        )}
      >
        <Section className="md:pt-24" id="about" sectionTitle="about">
          <p className="md:mt-0">
            My first job was all about Excel spreadsheets. At that point, I
            realized you could throw in some basic formulas to save you from
            manual number-crunching. Then, I stumbled upon the magic of crafting
            custom formulas with VBA. It blew my mind and got me hooked on
            programming, which eventually led me down this wild rabbit hole of
            web development.
            <br />
            <br />
            Jump to today, I'm rocking a gig as a frontend developer in the
            Philippines. My daily tools of the trade? Next.js, React, Tailwind,
            and TypeScript.
            <br />
            <br />
            When I'm not glued to my laptop, you'll find me strumming a guitar
            or binge-watching One Piece. I'm on episode 882 now, eagerly waiting
            for all the action in the Land of Wano!
          </p>
        </Section>
        <Section id="projects" sectionTitle="projects">
          <div className="flex flex-col w-full gap-4">
            {projects.map((project) => (
              <Project project={project} />
            ))}
          </div>
        </Section>
        <Copyright className="px-4 my-8 md:hidden" />
      </div>
    </div>
  );
}

import AboutMe from "../components/Home/AboutMe";
import Contact from "../components/Home/contact";
import { ContactIcon } from "../components/Icons/contact";
import { Layout } from "../components/layout/Layout";
import GithubIcon from "../components/svgs/Github";
import LinkedinIcon from "../components/svgs/Linkedin";
import TwitterIcon from "../components/svgs/Twitter";

export default function Home() {
  return (
    <Layout>
      <AboutMe />
      <section id="rrss">
        <div className="flex justify-center gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/dani-ballesteros/"
            target="_blank"
            title="Linkedin"
            className="transition ease-linear hover:brightness-125"
          >
            <LinkedinIcon className="text-5xl" />
          </a>
          <a
            href="https://github.com/pangeasi"
            target="_blank"
            title="Github"
            className="transition ease-linear hover:brightness-125"
          >
            <GithubIcon className="text-5xl" />
          </a>
          <a
            href="https://twitter.com/Danitiwt"
            target="_blank"
            title="Twitter"
            className="transition ease-linear hover:brightness-125"
          >
            <TwitterIcon className="text-5xl" />
          </a>
          <a href="https://mnf.red/daniballesteros" target="_blank">
            <span className="text-[36px] font-bold text-sky-600">CV</span>
          </a>
        </div>
      </section>
      <section id="contact" className="flex flex-col items-center">
        <h2 className="text-3xl mt-8">
          <span>
            <ContactIcon className="text-5xl inline-flex pb-1" />
          </span>{" "}
          Contacto
        </h2>
        <Contact />
      </section>
    </Layout>
  );
}

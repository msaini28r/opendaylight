import React from 'react'
import './GettingStarted.css'
import Casey from '../../images/Casey.png'
import gmail from '../../images/gmail.png'
import linkedin_2 from '../../images/linkedin_2.png'

const resources = [
  {
    heading: 'Gerrit',
    description:
      'Developers, Engineers, and Students are welcome to contribute to our project.',
    name: 'View Code',
    link: 'https://git.opendaylight.org/gerrit/',
  },
  {
    heading: 'Docs',
    description:
      'Read the documentation to learn more about how OpenDaylight works.',
    name: 'Getting Started',
    link: 'https://docs.opendaylight.org/en/stable-chlorine/getting-started-guide/index.html',
  },
  {
    heading: 'Projects',
    description:
      'Checkout all our new projects are currently in progress. Take a look at our ongoing initiatives.',
    name: 'Other Projects',
    link: 'https://wiki.opendaylight.org/x/-QUF',
  },
  {
    heading: 'Tracking',
    description:
      'You can report any bug or issues through Jira and we will resolve it.',
    name: 'Tracking issues',
    link: 'https://jira.opendaylight.org/',
  },
  {
    heading: 'Wiki',
    description:
      'Get more information about Opendaylight through our Wiki page.',
    name: 'Learn More',
    link: 'https://wiki.opendaylight.org/x/DwYF',
  },
  {
    heading: 'TSC',
    description:
      'Join and engage yourself in discussions through TSC meetings.',
    name: 'Join Us',
    link: 'https://wiki.opendaylight.org/x/GwYF',
  },
]

const personality = [
  {
    image: Casey,
    name: 'Casey Cain',
    designation: 'Sr. Technical Community Architect ',
    description:
      'Experienced software engineer with expertise in web development.',
    company: 'The Linux Foundation',
    linkedin: 'https://www.linkedin.com/in/caseycain1/',
    gmail: 'ccain@linuxfoundation.org',
  },
  {
    image: Casey,
    name: 'Jill Lovato',
    designation: 'Marketing, Communication Director',
    description: 'Passionate designer with a keen eye for user-centric design.',
    company: 'The Linux Foundation',
    linkedin: 'https://www.linkedin.com/in/jilllovato/',
    gmail: 'jlovato@linuxfoundation.org',
  },
  {
    image: Casey,
    name: 'Venkatrangan Govindaragan',
    designation: 'TSC Chair, OpenDaylight',
    description: 'Passionate designer with a keen eye for user-centric design.',
    company: 'Nvidia',
    linkedin:
      'https://www.linkedin.com/in/venkatrangan-govindarajan-sdn-test-automation/',
    gmail: 'gvrangan@gmail.com',
  },
]

const GettingStarted = () => {
  return (
    <div>
      <div className="started-banner mb-20">
        <div className="started-box container mx-auto text-center xl:p-10 xxl:p-20">
          <div>
            <h1 className="started-title xl:pb-6 xxl:pb-9 xl:text-5xl xxl:text-7xl">
              Get <span className="started-span">Started</span>
            </h1>
            <p className="started-body xl:px-44 xxl:px-48 text-center xl:text-lg xxl:text-2xl mb-9">
              Whether you’re a user, an engineer working for a solution
              provider, or an independent developer with a personal interest in
              open networking, there’s no better way to help drive forward the
              field of networking than to join the OpenDaylight developer
              community.
            </p>
          </div>
          <div className="buttons">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button mr-10 py-2.5 px-6 text-base"
              href="https://docs.opendaylight.org/en/stable-chlorine/downloads.html"
            >
              Download
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="download-button py-2.5 px-12 text-base"
              href="https://docs.opendaylight.org/en/stable-chlorine/getting-started-guide/index.html"
            >
              Guide
            </a>
          </div>
        </div>
      </div>
      <div className="resources container mx-auto mb-20">
        <div className="resources-title">
          <h2 className="text-center mb-20">Resources</h2>
        </div>
        <div className="resources-cards grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Using map so that new card automatically get's created when new resources is added. */}
          {resources.map((resources, index) => (
            <div
              key={index}
              className="cards-box px-2 rounded-lg shadow-xl w-11/12"
            >
              <div className="cards my-4 pl-4 pt-5">
                <h2 className="cards xl:text-2xl xxl:text-3xl font-semibold mb-5">
                  {resources.heading}
                </h2>
                <p className="mb-5 w-11/12 xl:text-base xxl:text-base">
                  {resources.description}
                </p>
                <a
                  href={resources.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="name underline underline-offset-4 decoration-orange-500 xl:text-sm xxl:text-base"
                >
                  {resources.name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto media-personality mb-20">
        <div className="resources-title mb-20">
          <h2 className="text-center xl:text-3xl xxl:text-4xl xl:mb-7 xxl:mb-10">
            Key Contacts
          </h2>
          <p className="text-center xl:text-xl xxl:text-2xl">
            Need help related to something? Reach out to us.
          </p>
        </div>
        <div className="personility grid sm:grid-cols-1 md:grid-cols-3 xl:gap-2 xxl:gap-9">
          {personality.map((personality, index) => (
            <div className="media-card border xl:w-11/12 xxl:w-10/12 rounded-xl p-4">
              <div className="image flex justify-center mb-6">
                <img className="rounded-xl" src={personality.image} alt="" />
              </div>
              <div className="card-info xl:mb-4 xxl:mb-5">
                <h4 className="mb-3 xl:text-lg xxl:text-xl">
                  {personality.name}
                </h4>
                <p className="text-normal font-semibold mb-3">
                  {personality.designation}
                </p>
                <p className="xl:text-sm xxl:text-base w-11/12">
                  {personality.description}
                </p>
              </div>
              <div className="media-links flex justify-between">
                <div>
                  <p className="company-name">{personality.company}</p>
                </div>
                <div className="flex xl:space-x-3 xxl:space-x-5">
                  <a
                    href={`mailto:${personality.gmail}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gmail} alt="" />
                  </a>
                  <a
                    href={personality.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={linkedin_2} alt="" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GettingStarted

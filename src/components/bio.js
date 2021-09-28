import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Link = ({ link, overrideText }) => (
  <p style={{ fontSize: "1.75rem", paddingLeft: "0.5em" }}>
    <a href={link}>{overrideText ?? link.split("/").slice(2, 3).join("/")}</a>
  </p>
)

const projectManagementLinks = [
  {
    link: "https://github.com/flapflapio",
    overrideText: "github.com/flapflapio",
    image: (
      <StaticImage
        src="https://github.com/fluidicon.png"
        alt="GitHub"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
      />
    ),
  },
  {
    link: "https://flapflap.atlassian.net/jira/software/projects/FLAP/boards/1",
    image: (
      <StaticImage
        src="../images/jira.png"
        alt="Jira"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
      />
    ),
  },
  {
    link: "https://drive.google.com/drive/folders/18dWUMTXYIPUQAYMiFWmqotKA-cOekT3Q",
    image: (
      <StaticImage
        src="https://ssl.gstatic.com/images/branding/product/2x/drive_2020q4_48dp.png"
        alt="Google Drive"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
      />
    ),
  },
]

const appLinks = [
  {
    link: "https://machinist.flapflap.io",
    image: (
      <StaticImage
        src="../images/gears-set.png"
        alt="Machinist Web App"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
      />
    ),
  },
  {
    link: "/",
    overrideText: "www.flapflap.io",
    image: (
      <StaticImage
        src="../images/baby-chick.png"
        alt="Machinist Dev Blog"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        width={50}
        height={50}
        quality={95}
      />
    ),
  },
]

const mapLinks = links =>
  links.map(({ link, image, overrideText }) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 9fr",
        margin: "0.5em",
      }}
    >
      {image}
      <Link link={link} overrideText={overrideText} />
    </div>
  ))

const BioRoot = ({ children }) => (
  <div className="bio" style={{ display: "flex", flexDirection: "column" }}>
    {children}
  </div>
)

const AppLinks = () => <BioRoot>{mapLinks(appLinks)}</BioRoot>
const ProjectManagementLinks = () => (
  <BioRoot>{mapLinks(projectManagementLinks)}</BioRoot>
)

const Bio = () => {
  return (
    <>
      <ProjectManagementLinks />
      <AppLinks />
      <hr />
    </>
  )
}

export default Bio

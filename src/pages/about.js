import React from "react"
import TitleComponent from '../components/titleComponent'
import Layout from '../layouts/mainLayout'
import { css } from '@emotion/core'
import { BlogContext } from '../context/mainContext'
import nader from '../images/nader.jpg'

class About extends React.Component {
  render() {
    const { theme } = this.props.context
    return (
      <Layout>
        <TitleComponent title='About Me' />
        <p css={paragraphStyle(theme)}>My name is Nader Dabit. I'm a full stack developer specializing in cross-platform and cloud-enabled application development.</p>
        <p css={paragraphStyle(theme)}>Right now I am working at AWS on a team that is pushing the boundaries on what it means to be a full stack developer. We are laying the groundwork the next generation of developers that legerage the cloud.</p>
        <img
          src={nader}
          css={imageStyle(theme)}
        />
        <p css={paragraphStyle(theme)}>This page was created using a custom component. If you'd like to learn more about me, follow me <a href="https://twitter.com/dabit3">on Twitter</a>. If you're interested in the causes that I support, check out the following:</p>
    
        <ul>
          <li>Gaza Sky Geeks</li>
          <li>Charity water</li>
          <li>Laptops for developers</li>
        </ul>
      </Layout>
    )
  }
}

export default function AboutWithContext(props) {
  return (
    <BlogContext.Consumer>
      {
        context => <About {...props} context={context} />
      }
    </BlogContext.Consumer>
  )
}

const imageStyle = () => css`
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 30px 60px -10px, rgba(0, 0, 0, 0.22) 0px 18px 36px -18px;
  max-width: 400px;
`

const paragraphStyle = ({ primaryFontColor, fontFamily }) => css`
  color: ${primaryFontColor};
  font-family: ${fontFamily};
`

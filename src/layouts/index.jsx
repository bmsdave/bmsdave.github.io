import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import 'typeface-open-sans/index.css'
import 'typeface-fira-sans/index.css'
import config from '../../config'
import Navigation from '../components/navigation/navigation'
import Footer from '../components/footer/footer'
import PageContainer from '../components/elements/pageContainer'

const PageWrapper = styled('div')`
  min-height: calc(100vh - 152px);
  margin: 10px;
`

export default class MainLayout extends React.Component {
  render() {
    const { children, location } = this.props
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle}`}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Navigation currentPathname={location.pathname} />
        <PageWrapper>
          <PageContainer>{children()}</PageContainer>
        </PageWrapper>
        <PageContainer>
          <Footer config={config} />
        </PageContainer>
      </div>
    )
  }
}

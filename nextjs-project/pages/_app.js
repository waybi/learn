import App, { Container } from 'next/app'
import PageLoading from '../components/PageLoading'
import Router from 'next/router'

import 'antd/dist/antd.css'

class MyApp extends App {
  state = {
    loading: false
  }

  componentDidMount() {
    Router.events.on('routeChangeStart', this.startLoading)
    Router.events.on('routeChangeComplete', this.stopLoading)
    Router.events.on('routeChangeError', this.stopLoading)
  }

  componentWillUnmount() {
    Router.events.off('routeChangeStart', this.startLoading)
    Router.events.off('routeChangeComplete', this.stopLoading)
    Router.events.off('routeChangeError', this.stopLoading)
  }

  startLoading = () => {
    this.toggleLoading(true)
  }

  stopLoading = () => {
    setTimeout(() => {
      this.toggleLoading(false)
    }, 1200)
  }

  toggleLoading(flag) {
    this.setState({
      loading: flag
    })
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props
    const { loading } = this.state

    console.log(loading)

    return (
      <Container>
        {loading ? <PageLoading /> : null}
        <Component />
      </Container>
    )
  }
}

export default MyApp

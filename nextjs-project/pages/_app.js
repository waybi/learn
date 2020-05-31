import App from "next/app";
import Router from "next/router";
import { Provider } from "react-redux";

// import "antd/dist/antd.css";

import withReduxStore from "../lib/with-redux";
import testHoc from "../lib/testHoc";

import Layout from "../components/Layout";
import PageLoading from "../components/PageLoading";

class MyApp extends App {
  state = {
    loading: false
  };

  componentDidMount() {
    Router.events.on("routeChangeStart", this.startLoading);
    Router.events.on("routeChangeComplete", this.stopLoading);
    Router.events.on("routeChangeError", this.stopLoading);
  }

  componentWillUnmount() {
    Router.events.off("routeChangeStart", this.startLoading);
    Router.events.off("routeChangeComplete", this.stopLoading);
    Router.events.off("routeChangeError", this.stopLoading);
  }

  startLoading = () => {
    this.toggleLoading(true);
  };

  stopLoading = () => {
    setTimeout(() => {
      this.toggleLoading(false);
    }, 1200);
  };

  toggleLoading(flag) {
    this.setState({
      loading: flag
    });
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    const { loading } = this.state;

    return (
      <Provider store={reduxStore}>
        {loading ? <PageLoading /> : null}
        <Layout dispatch={reduxStore.dispatch}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default testHoc(withReduxStore(MyApp));

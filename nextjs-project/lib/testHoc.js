export default Comp => {
  function TestHocComp({ Component, pageProps, ...rest }) {
    if (!pageProps) {
      pageProps = {};
      pageProps.name = "waybi";
    }

    return <Comp Component={Component} pageProps={pageProps} {...rest} />;
  }

  return TestHocComp;
};

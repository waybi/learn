import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./index.css";
import axios from "axios";
import { Button } from "antd";

import Router from "next/router";

import Link from "next/link";

class AA extends React.Component{

  componentDidMount() {
    // location.href = process.env.GITHUB_AUTH_URI
  }

  render() {
    return <h1>登录</h1>
  }

}

function Home({ user, userRepos, starredRepos }) {
  // useEffect(() => {
  //   axios.get("/api/user/config").then(res => console.log(res));
  // }, []);

  const href = () => {
    Router.push(
      {
        pathname: "/test/a",
        query: {
          id: 2
        }
      },
      "/test/a/2"
    );
  };

  return (
    <div>
      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
      </div>

      <AA />

      <Link href={"/a?id=2"} as="/a/2">
        <Button> waybi a </Button>
      </Link>

      <Button onClick={href}> /dfdfd/dfdf </Button>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
          text-align: center;
        }
        .auth {
          display: inline-block;
          width: 100px;
          height: 34px;
          line-height: 34px;
          border: 1px solid #08c;
          margin-top: 30px;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
}

Home.getInitialProps = async function(ctx) {
  return {};
};

export default connect(function mapState(state) {
  return {
    user: state.user,
    focusedRepos: state.config
  };
})(Home);

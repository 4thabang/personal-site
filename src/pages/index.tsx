import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/esm/styles/prism";

const code: string = `
func main() {
  fmt.Println("welcome 😅")
}
`;
const Index = () => {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <h1>
            Hi, I'm Thabang <span>👋</span>
            <span className="fancy">.</span>
          </h1>
          <span className="handle">@consistentdev</span>
          <br />
          <br />
          {/* <SyntaxHighlighter language="go" style={materialOceanic}>
            {code}
          </SyntaxHighlighter> */}
          {/* <code>console.log("welcome 😅")</code> */}
          <div>
            <h3>👨‍💻 About Me:</h3>
            20 | MCR, UK / SF, USA
            <br />
            <br />I am a{" "}
            <span className="code">full-stack software engineer</span> and
            brewing self-taught <span className="code">data scientist</span>.
            <br />
            <br />
            Although, you'll most likely find me building scalable, robust and
            efficient
            <br />
            backend systems.
            <br />
            <h3>🚀 Building:</h3>I am currently working on{" "}
            <a href="https://deploi.ai" className="deploi">
              deploi.ai
            </a>
            .
            <br />
            <br />
            We are building infrastructure for ML teams to effortlessly deploy
            and monitor
            <br />
            their models while being tested in staging environments in order to
            <br />
            validate model <span className="code">accuracy</span> and gracefully
            train them alongside{" "}
            <span className="code">
              real-world
              <br />
              data
            </span>
            , all before deploying models into production.
            <br />
            <h3>👨‍💻 Technologies:</h3>
            <p>
              {/* <!--Programming Languages--> */}
              <p className="tech-heading">Programming Languages:</p>
              <img
                className="badges"
                width="auto"
                height="20"
                src="https://img.shields.io/badge/Lang-TypeScript-3278C6?style=flat-square"
                alt="TypeScript"
              />
              <img
                className="badges"
                width="auto"
                height="20"
                src="https://img.shields.io/badge/Lang-Go-7FD5EA?style=flat-square"
                alt="GoLang"
              />
              <img
                className="badges"
                width="auto"
                height="20"
                src="https://img.shields.io/badge/Lang-JavaScript-F8C751?style=flat-square"
                alt="Javascript"
              />
              <br />
              {/* <!--DBMS/DB--> */}
              <p className="tech-heading">DBMS/DB:</p>
              <img
                className="badges"
                src="https://img.shields.io/badge/DB-PostgresSQL-336791?style=flat-square"
                alt="PostgreSQL"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/DB-Firebase-FFCB2B?style=flat-square"
                alt="Firebase"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/DB-MongoDB-13AA52?style=flat-square"
                alt="MongoDB"
              />
              <br />
              {/* <!--Runtime--> */}
              <p className="tech-heading">Runtime:</p>
              <img
                src="https://img.shields.io/badge/Runtime-NodeJS-036E00?style=flat-square"
                alt="NodeJS"
              />
              <br />
              {/* <!--Tool--> */}
              <p className="tech-heading">Tools:</p>
              <img
                className="badges"
                src="https://img.shields.io/badge/Tool-Redux-764ABC?style=flat-square"
                alt="Redux"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/Tool-Docker-369DED?style=flat-square"
                alt="Docker"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/Tool-Vim-009833?style=flat-square"
                alt="Vim"
              />
              <br />
              {/* <!--Frameworks--> */}
              <p className="tech-heading">Frameworks:</p>
              <img
                className="badges"
                src="https://img.shields.io/badge/Framework-React-61DAFB?style=flat-square"
                alt="React"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/Framework-React%20Native-61DAFB?style=flat-square"
                alt="React Native"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/Framework-NextJS-111111?style=flat-square"
                alt="NextJS"
              />
              <img
                className="badges"
                src="https://img.shields.io/badge/Framework-ExpressJS-323232?style=flat-square"
                alt="ExpressJS"
              />
            </p>
          </div>
          <br />
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .hover-element {
          margin: 0;
          padding: 10px;
          background: grey;
          border-radius: 10px;
        }
        .badges {
          margin-right: 5px;
        }
        .tech-heading {
          margin: 0.5em 0px 0.5em 0px;
          font-weight: 400;
        }
        .deploi {
          background-image: linear-gradient(45deg, #f95e3b, #d53a9d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          font-weight: 500;
        }
        .deploi:hover {
          background-image: linear-gradient(45deg, #d53a9d, #f95e3b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          font-weight: 500;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
          border-image: linear-gradient(to right, #f95e3b, #d53a9d) 100% 1;
          border-style: solid;
          border-width: 3px;
          padding-top: 10px;
          padding-bottom: 10px;
        }
        .code {
          background-image: linear-gradient(45deg, #f95e3b, #d53a9d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: #f95e3b;
        }
        .handle {
          display: inline-block;
          margin-top: 0.275em;
          color: #9b9b9b;
          letter-spacing: 0.05em;
        }

        @media (min-width: 769px) {
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Index;

import Chapters from "../Chapters/Chapters";
import Hero from "../Hero/Hero";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaseeda Al Burda</title>
        <link rel="canonical" href="http://www.qaseedaburda.com" />
      </Helmet>

      <Hero />
      <Chapters />
    </div>
  );
};

export default Home;

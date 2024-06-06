import { Link } from "react-router-dom";
import styles from "./Credits.module.css";
import { Helmet } from "react-helmet";

const Credits = () => {
  return (
    <div className={styles.container}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Qaseeda Al Burda - Credits</title>
        <link rel="canonical" href="http://www.qaseedaburda.com" />
      </Helmet>
      <h1>Credits</h1>
      <p>
        This webapp is inspired by{" "}
        <Link to="https://www.qasidaburda.com">
          https://www.qasidaburda.com
        </Link>{" "}
        and is created using modern tech stack.
      </p>
      <p>
        The English translation is kindly provided by Abu Zahra Foundation.
        Please consider purchasing a copy of their Burda{" "}
        <Link to="https://www.abuzahra.org/product/qasida-al-burda/">here</Link>
        .
      </p>
      <p>Tafseers are provided by Faqeer Muhammad Shakeel Qaadiri Ridawi</p>
      <p>The audios are taken from multiple reciters.</p>
      <p>
        One is the Burda by Ahmed and Yusuf Muzarza'. Listen to it on YouTube{" "}
        <Link to="https://www.youtube.com/watch?v=uwpKPO-r8GU">here</Link>.{" "}
      </p>
      <p>
        Another one is by Thwaha Thangal. Listen to him on YouTube{" "}
        <Link to="https://www.youtube.com/@ThangalShahinOfficial">here</Link>
      </p>
    </div>
  );
};

export default Credits;

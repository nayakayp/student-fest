import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Nav from "../components/Nav";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Artikel({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>Artikel - Student Fest</title>
      </Head>
      <Nav></Nav>
      <section>
        <h2 className={utilStyles.headingXl}>Artikel Terbaru</h2>
        <div className={`line ${utilStyles.line}`}></div>
        <div className={`posts `}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title, cover }) => (
              <li className={utilStyles.listItem} key={id}>
                <div className="title-wrapper">
                  <Link href={`/artikel/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <p className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </p>
                </div>
                <div className="image-wrapper">
                  <Image src={cover} width={225} height={150} />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
          li {
            background: white;
            padding: 4rem;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          a {
            font-size: 2.4rem;
            font-weight: 800;
            color: #333;
          }
          p {
            font-size: 1.2rem;
          }
          section {
            padding: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          h2 {
            color: #333333;
          }
          .line {
            background: #333;
          }
        `}</style>
      </section>
    </Layout>
  );
}

import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Form from "../components/FormWebinar";
import Nav from "../components/Nav";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home() {
  return (
    <Layout home>
      <Nav />
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Form />
    </Layout>
  );
}

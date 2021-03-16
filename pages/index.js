import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import styles from "../components/layout.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Hero from "../components/Hero";
import Profil from "../components/Profil";
import Mentor from "../components/Mentor";
import Form from "../components/Form";
import Banner from "../components/Banner";
import FAQ from "../components/Faq";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Hero />
      <Profil />
      <Mentor />
      <Form />
      <Banner />
      <FAQ />
    </Layout>
  );
}

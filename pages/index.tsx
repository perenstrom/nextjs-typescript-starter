import { NextPage } from 'next';
import Head from 'next/head';

const IndexPage: NextPage<{}> = ({}) => {
  return (
    <div>
      <Head>
        <title>NextJS Typescript Starter</title>
      </Head>
      <p>Just a starter for creating NextJS Typescript apps.</p>
    </div>
  );
};

export default IndexPage;

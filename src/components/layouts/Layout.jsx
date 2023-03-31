import Head from "next/head";
import { Work_Sans } from 'next/font/google'

const worksans = Work_Sans({ subsets: ['latin'] })

export default function Layout({ children, title, description }) {
  return (
    <main id="layout" className={`${worksans.className}`}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children}
    </main>
  );
}

Layout.defaultProps = {
  title: "Coding & Co. Challenge",
  description: "This is a challenge for frontend developer position",
};


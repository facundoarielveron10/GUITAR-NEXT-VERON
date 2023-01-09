import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children, title = '' }) {
    return (
        <>
            <Head>
                <title>{`GuitarLA - ${title}`}</title>
            </Head>

            <Header />

            {children}

            <Footer />
        </>
    );
}

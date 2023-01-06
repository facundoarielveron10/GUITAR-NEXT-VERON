import Head from 'next/head';

export default function Layout({ children, title = '' }) {
	return (
		<>
			<Head>
				<title>{`GuitarLA - ${title}`}</title>
			</Head>
			<header>Header</header>

			{children}

			<footer>Footer</footer>
		</>
	);
}

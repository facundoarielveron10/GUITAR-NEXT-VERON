import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
	return (
		<>
			<Layout title="Inicio">
				<div>
					<h1>Hola mundo</h1>
					<Link href="/nosotros">Nosotros</Link>
				</div>
			</Layout>
		</>
	);
}

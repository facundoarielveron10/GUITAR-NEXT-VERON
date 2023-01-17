import Layout from '../components/layout';
import Entrada from '../components/entrada';
import styles from '../styles/grid.module.css';

export default function Blog({ blog }) {
	return (
		<Layout title="Blog">
			<main className="contenedor">
				<h1 className="heading">Blog</h1>
				<div className={styles.grid}>
					{blog?.map(entrada => (
						<Entrada key={entrada.id} entrada={entrada} />
					))}
				</div>
			</main>
		</Layout>
	);
}

export async function getServerSideProps() {
	const respuesta = await fetch(`${process.env.API_URL}blog?populate=imagen`);

	const { data: blog } = await respuesta.json();

	return {
		props: {
			blog,
		},
	};
}

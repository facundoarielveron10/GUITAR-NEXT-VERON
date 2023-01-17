import Image from 'next/image';
import styles from '../../styles/guitarras.module.css';
import Layout from '../../components/layout';

export default function Producto({ producto }) {
	const { nombre, descripcion, precio, imagen } = producto[0].attributes;

	return (
		<Layout title={`Guitarra ${nombre}`}>
			<div className={styles.guitarra}>
				<Image
					src={imagen.data.attributes.url}
					width={600}
					height={400}
					alt={`Guitarra ${nombre}`}
				/>
				<div className={styles.contenido}>
					<h3>{nombre}</h3>
					<p className={styles.descripcion}>{descripcion}</p>
					<p className={styles.precio}>${precio}</p>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const respuesta = await fetch(`${process.env.API_URL}guitarras`);
	const { data } = await respuesta.json();

	const paths = data.map(guitarra => ({
		params: {
			url: guitarra.attributes.url,
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { url } }) {
	const respuesta = await fetch(
		`${process.env.API_URL}guitarras?filters[url]=${url}&populate=imagen`,
	);
	const { data: producto } = await respuesta.json();
	return {
		props: {
			producto,
		},
	};
}

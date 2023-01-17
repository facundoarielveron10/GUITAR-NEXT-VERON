import Image from 'next/image';
import Layout from '../../components/layout';
import { formatearFecha } from '../../utils/helpers';
import styles from '../../styles/blog.module.css';

export default function Entrada({ entrada }) {
	const { titulo, contenido, imagen, publishedAt } = entrada[0].attributes;

	return (
		<Layout title={titulo}>
			<article className={`${styles.post} ${styles['mt-3']}`}>
				<Image
					src={imagen.data.attributes.url}
					width={1000}
					height={400}
					alt={`Entrada ${titulo}`}
				/>

				<div className={styles.contenido}>
					<h3>{titulo}</h3>
					<p className={styles.fecha}>
						{formatearFecha(publishedAt)}
					</p>
					<p className={styles.texto}>{contenido}</p>
				</div>
			</article>
		</Layout>
	);
}

export async function getServerSideProps({ query: { url } }) {
	const respuesta = await fetch(
		`${process.env.API_URL}blog?filters[url]=${url}&populate=imagen`,
	);

	const { data: entrada } = await respuesta.json();

	return {
		props: {
			entrada,
		},
	};
}

import Layout from '../components/layout';
import Guitarra from '../components/guitarra';
import Curso from '../components/curso';
import Entrada from '../components/entrada';
import styles from '../styles/grid.module.css';

export default function Home({ guitarras, blog, curso }) {
	return (
		<>
			<Layout title="Inicio">
				<main className="contenedor">
					<h1 className="heading">Nuestra Coleccion</h1>
					<div className={styles.grid}>
						{guitarras?.map(guitarra => (
							<Guitarra
								key={guitarra.id}
								guitarra={guitarra.attributes}
							/>
						))}
					</div>
				</main>

				<Curso curso={curso} />

				<section className="contenedor">
					<h2 className="heading">Blog</h2>
					<div className={styles.grid}>
						{blog?.map(entrada => (
							<Entrada key={entrada.id} entrada={entrada} />
						))}
					</div>
				</section>
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const urlGuitarras = `${process.env.API_URL}guitarras?populate=imagen`;
	const urlBlog = `${process.env.API_URL}blog?populate=imagen`;
	const urlCurso = `${process.env.API_URL}curso?populate=imagen`;

	const [resGuitarras, resBlog, resCurso] = await Promise.all([
		fetch(urlGuitarras),
		fetch(urlBlog),
		fetch(urlCurso),
	]);

	const [{ data: guitarras }, { data: blog }, { data: curso }] =
		await Promise.all([
			resGuitarras.json(),
			resBlog.json(),
			resCurso.json(),
		]);
	console.log(curso);
	return {
		props: {
			guitarras,
			blog,
			curso,
		},
	};
}

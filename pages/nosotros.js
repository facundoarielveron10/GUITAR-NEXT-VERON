import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/nosotros.module.css';

export default function Nosotros() {
	return (
		<Layout title="Nosotros">
			<main className="contenedor">
				<h1 className="heading">Nosotros</h1>

				<div className={styles.contenido}>
					<Image
						src="/img/nosotros.jpg"
						width={1000}
						height={800}
						alt="Nosotros"
					/>

					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Cum minima, itaque nostrum veritatis facere
							natus dolor, incidunt eveniet quaerat facilis
							nesciunt dolorum placeat recusandae, deleniti sunt
							ducimus saepe aspernatur obcaecati.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Cum minima, itaque nostrum veritatis facere
							natus dolor, incidunt eveniet quaerat facilis
							nesciunt dolorum placeat recusandae, deleniti sunt
							ducimus saepe aspernatur obcaecati.
						</p>
					</div>
				</div>
			</main>
		</Layout>
	);
}

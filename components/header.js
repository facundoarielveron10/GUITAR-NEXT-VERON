import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/header.module.css';

export default function Header() {
	const router = useRouter();

	return (
		<header className={styles.header}>
			<div className={`contenedor ${styles.barra}`}>
				<Link href="/">
					<Image
						src="/img/logo.svg"
						width={300}
						height={40}
						alt="Logo GuitarLA"
					/>
				</Link>

				<nav className={styles.navegacion}>
					<Link
						className={`${
							router.pathname === '/' ? styles.activo : ''
						}`}
						href="/"
					>
						Inicio
					</Link>
					<Link
						className={`${
							router.pathname === '/nosotros' ? styles.activo : ''
						}`}
						href="/nosotros"
					>
						Nosotros
					</Link>
					<Link
						className={`${
							router.pathname === '/blog' ? styles.activo : ''
						}`}
						href="/blog"
					>
						Blog
					</Link>
					<Link
						className={`${
							router.pathname === '/tienda' ? styles.activo : ''
						}`}
						href="/tienda"
					>
						Tienda
					</Link>
					<Link href="/carrito">
						<Image
							src="/img/carrito.png"
							width={30}
							height={25}
							alt="Carrito"
						/>
					</Link>
				</nav>
			</div>
		</header>
	);
}

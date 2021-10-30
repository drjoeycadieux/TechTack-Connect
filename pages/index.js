import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>TechTack | Connect2021-2022</title>
				<meta name="description" content="A computer programmer, sometimes called a software developer, a programmer or more recently a coder, is a person who creates computer software. The term computer programmer can refer to a specialist in one area of computers, or to a generalist who writes code for many kinds of software." />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<header className={styles.header}>
					<h3 className={styles.h3}>
						TechTack Connect | 2021-2022
					</h3>
				</header>
			</main>


			<section className={styles.home}>
				<h3>Japan has a large conglomerate of international level such as: Fujifilm (which developed the first general public computer, the FUJIC (in) 1999 in 1956) and Sony, Panasonic, Canon, Nikon, Fujitsu, Hitachi, Sharp, NEC , Nintendo, Epson or Toshiba are among the most famous companies in the world.</h3>
			</section>


			<section className={styles.content}>
				<h3>With Content Technology, we enable Media Companies, Educational organisations, Corporate Institutions and Retailers engage their customers and staff by creating workflow solutions that create content, manage content, distribute content and analyse content.</h3>
			</section>


			<section className={styles.subcontent}>
				<h3>A help desk is a resource intended to provide the customer or end user with information and support related to a company's or institution's products and services</h3>
			</section>

			<footer className={styles.footer}>
				<a
					href="https://techwithjoey.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Developed By Joey Cadieux
        </a>
			</footer>
		</div>
	)
}

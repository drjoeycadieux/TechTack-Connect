import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Footer() {
	return(
		<div className={styles.footer}>
			<a
					href="https://techwithjoey.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					Developed By Joey Cadieux
        </a>
		</div>
	)
}
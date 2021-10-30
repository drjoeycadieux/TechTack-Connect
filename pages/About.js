import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

// import components
import Footer from './components/Footer'


export default function About() {
	return(
		<div className={styles.content}>
		      <h3> About </h3>
					<Footer/>
		</div>
	)
}
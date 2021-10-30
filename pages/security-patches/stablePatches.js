import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'

// import components
import Footer from './components/Footer'


export default function stablePatches() {
	return (
		<div>  
      
			<h3> Hello Wolrd! </h3>

		  <Footer/>
		</div>
	)
}
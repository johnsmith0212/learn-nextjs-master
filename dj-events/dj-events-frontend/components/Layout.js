import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from './Header'
import styles from '@/styles/Layout.module.css'
import Footer from './Footer'
import Showcase from './Showcase'

const Layout = ({ title, keywords, description, children }) => {
	const router = useRouter()
	return (
		<div>
			<Head>
				<title>{title}</title>
				<metadata name='description' content={description} />
				<metadata name='keywords' content={keywords} />
			</Head>
			<Header />

			{router.pathname === '/' && <Showcase />}
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	)
}

Layout.defaultProps = {
	title: 'DJ Events | Find the hotest parties',
	description: 'Find the latest DJ and other music events',
	keywords: 'music, dj, edm, events',
}

export default Layout

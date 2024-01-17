import Layout from '@/components/Layout'
import Link from 'next/link'

const AboutPage = () => {
	return (
		<Layout title='About DJ Events'>
			<h1>About</h1>
			<p>This is an app for publishing and booking event</p>
			<p>Version: 1.0.0</p>
			<Link href='/'>Home</Link>
		</Layout>
	)
}

export default AboutPage

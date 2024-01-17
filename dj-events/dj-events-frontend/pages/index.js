import Layout from '@/components/Layout'
import Link from 'next/link'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'

const HomePage = ({ events }) => {
	return (
		<Layout>
			<h1>Upcoming Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}

			{events.map((evt) => (
				<EventItem key={evt.id} evt={evt} />
			))}

			{events.length > 0 && (
				<Link href='/events' className='btn-secondary'>
					View All Events
				</Link>
			)}
		</Layout>
	)
}

// export const getServerSideProps = async () => {
// 	const res = await fetch(`${API_URL}/api/events`)
// 	const events = await res.json()

// 	return {
// 		props: { events },
// 	}
// }

export const getStaticProps = async () => {
	const res = await fetch(`${API_URL}/api/events`)
	const events = await res.json()

	return {
		props: { events },
		revalidate: 1,
	}
}

export default HomePage

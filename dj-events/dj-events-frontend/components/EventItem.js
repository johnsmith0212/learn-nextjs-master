import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'

const EventItem = ({ evt }) => {
	return (
		<div className={styles.event}>
			<div className={styles.img}>
				<Image
					src={evt.image ? evt.image : '/images/event-default.png'}
					alt={evt.name}
					width={170}
					height={100}
				/>
			</div>

			<div className={styles.info}>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h3>{evt.name}</h3>
			</div>

			<div className={styles.link}>
				<Link href={`/events/${evt.slug}`} className='btn'>
					Details
				</Link>
			</div>
		</div>
	)
}

export default EventItem

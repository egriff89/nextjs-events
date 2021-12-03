import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list';
import EventsSearch from '../../components/events/events-search';


function AllEventsPage() {
	const events = getAllEvents();
	const router = useRouter();

	function handleFindEvents(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}

	return (
		<Fragment>
			<EventsSearch onSearch={handleFindEvents} />
			<EventList items={events} />
		</Fragment>
	);
}

export default AllEventsPage;

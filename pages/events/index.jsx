import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";

export default function EventsPage() {
  const router = useRouter();
  const events = getAllEvents();
  function findEvents(year, month) {
    router.push(`/events/${year}/${month}`);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEvents} />
      <EventList items={events} />
    </Fragment>
  );
}

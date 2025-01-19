import { getDuration, timeline } from "../data/timeline";
import { TimelineEvent } from "../data/timeline";

function TimelineYear({ event }: { event: TimelineEvent }) {
  return (
    <div
      className={`text-sm text-white dark:text-black font-semibold rounded-full px-3 py-1 mr-2 ${
        event.endDate
          ? "bg-stone-500"
          : "bg-stone-200 text-stone-500 dark:bg-stone-500 dark:text-stone-200"
      }`}
    >
      {event.endDate ? event.endDate.getFullYear() : "Present"}
    </div>
  );
}

function TimelineTitle({ event }: { event: TimelineEvent }) {
  return (
    <div className="text-lg font-semibold ml-2 dark:text-white">
      {event.title}
    </div>
  );
}

function TimelineDuration({ event }: { event: TimelineEvent }) {
  return (
    <div className="text-sm text-gray-500 ml-2 dark:text-gray-400">
      ({getDuration(event)})
    </div>
  );
}

function TimelineDescription({ event }: { event: TimelineEvent }) {
  return (
    <ul className="ml-6 mt-2 list-disc list-inside">
      {event.description.map((desc) => (
        <li className="flex items-start mb-2" key={desc}>
          <div className="text-sm text-gray-500 font-semibold mr-2">•</div>
          <div className="text-sm text-gray-800 dark:text-gray-200">{desc}</div>
        </li>
      ))}
    </ul>
  );
}

function TimelineItemTags({ event }: { event: TimelineEvent }) {
  return (
    <div className="flex flex-wrap ml-6 mt-2">
      {event.tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-300 mr-2 mt-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Timeline() {
  return (
    <section className="container mx-auto px-6 py-20" id="timeline">
      <h2 className="text-4xl font-bold mb-8 dark:text-white">Timeline</h2>

      <div>
        {timeline.map((event: TimelineEvent) => (
          <ol
            className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-600"
            key={event.title}
          >
            <li className="mb-10 ml-4">
              <div className="absolute w-3 h-3 bg-stone-200 dark:bg-stone-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-600"></div>
              <div className="flex flex-row items-center flex-wrap">
                <TimelineYear event={event} />
                <TimelineTitle event={event} />
                <TimelineDuration event={event} />
              </div>

              <TimelineDescription event={event} />
              <TimelineItemTags event={event} />
            </li>
          </ol>
        ))}
      </div>
    </section>
  );
}

interface WorkExperienceItem {
  company: string;
  role: string;
  dates: string;
  description: string;
  link?: string;
}

const workExperience: WorkExperienceItem[] = [
  {
    company: "Garage (YC W24)",
    role: "Founding Engineer",
    dates: "Feb 2025 - Present",
    description: "Currently building the modern emergency vehicle marketplace.",
    link: "https://www.shopgarage.com",
  },
  {
    company: "Frontdoor, Inc.",
    role: "Software Engineer",
    dates: "Jan 2023 - Feb 2025",
    description: "Microservices, Angular, and more React Native!",
    link: "https://www.frontdoorhome.com",
  },
  {
    company: "Perform",
    role: "Founding Software Engineer",
    dates: "Dec 2021 - Oct 2022",
    description:
      "Where I got my feet wet working early stage. Swift -> React -> React Native",
  },
];

export default function WorkExperience() {
  return (
    <div
      id="experience"
      className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-gray-900 dark:text-white mb-8">
          Experience
        </h2>
        <div className="space-y-8">
          {workExperience.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                      >
                        {item.company}
                      </a>
                    ) : (
                      item.company
                    )}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-300">
                    {item.role}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                  {item.dates}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

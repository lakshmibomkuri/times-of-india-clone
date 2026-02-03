import { ChevronRight } from "lucide-react";
import Image from "next/image";

const entertainmentSectionData = {
  lead: {
    title: "Rashmika clears wedding rumours: New date sparks massive buzz",
    image: "https://picsum.photos/seed/entfeat/600/400",
  },
  middleList: [
    "Border 2 Box Office Update: Film crosses ₹262 cr",
    "Sanjay Mishra reacts to Arijit Singh’s retirement",
    "Firing outside Rohit Shetty’s home: Police detain suspect",
    "Thalapathy Vijay interview: Actor opens up on regrets",
    "Rajisha Vijayan: Mammootty switches so smoothly",
  ],
  bottomCards: [
    "The 50: Release date, TV & OTT details",
    "Excl: Nikki on doing ‘The 50’ despite health issues",
    "‘The 50’: Maxtern breaks silence on fight with Elvish",
    "Archana Gautam on ‘The 50’: Mental, physical challenges",
  ],
  rightStories: [
    {
      image: "https://picsum.photos/seed/ent1/80/80",
      title: "Amaal reveals having 45 stitches on his face",
    },
    {
      image: "https://picsum.photos/seed/ent2/80/80",
      title: "Confirmed list of contestants for ‘The 50’",
    },
    {
      image: "https://picsum.photos/seed/ent3/80/80",
      title: "The 50 Grand Premiere & Contestants Live Updates",
    },
    {
      image: "https://picsum.photos/seed/ent4/80/80",
      title: "I am comfortable in my own skin, says Aishwarya",
    },
  ],
};

export function Entertainment() {
  return (
    <section className="mt-6 max-w-[980px] mx-auto">
      {/* TITLE */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Entertainment</h2>
        <ChevronRight className="w-4 h-4" />
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-4">

        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-8">
          {/* TOP ROW */}
          <div className="grid grid-cols-12 gap-4">
            {/* FEATURED */}
            <div className="col-span-12 md:col-span-7 relative rounded-lg overflow-hidden h-[200px] sm:h-[220px] md:h-[260px]">
              <Image
                src={entertainmentSectionData.lead.image}
                alt={entertainmentSectionData.lead.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm sm:text-base font-semibold leading-snug">
                {entertainmentSectionData.lead.title}
              </p>
            </div>

            {/* MIDDLE LIST */}
            <div className="col-span-12 md:col-span-5">
              <ul className="space-y-2 sm:space-y-3 text-sm">
                {entertainmentSectionData.middleList.map((text, i) => (
                  <li
                    key={i}
                    className={`${
                      i !== entertainmentSectionData.middleList.length - 1
                        ? "border-b pb-2"
                        : ""
                    } truncate`}
                  >
                    <span className="block whitespace-nowrap overflow-hidden text-ellipsis hover:text-red-600 cursor-pointer">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* BOTTOM CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-sm text-gray-700">
            {entertainmentSectionData.bottomCards.map((text, i) => (
              <div
                key={i}
                className="leading-snug hover:text-red-600 cursor-pointer"
              >
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <aside className="col-span-12 lg:col-span-4 space-y-4 mt-4 lg:mt-0">
          {entertainmentSectionData.rightStories.map((item, i) => (
            <div key={i} className="flex gap-3">
              <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm leading-snug hover:text-red-600 cursor-pointer">
                {item.title}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

export default function UpNextArticlePage() {
    return (
      <div className="min-h-screen bg-white max-w-[980px]">
  
        {/* ================= TOP STRIP ================= */}
        <div className="mx-auto pt-4">
            <h2 className="text-[18px] font-semibold text-black"> Up Next
            </h2>  
          {/* Top Banner Ad */}
          <div className="mb-6">
            <img
              src="https://picsum.photos/seed/banner/1200/90"
              alt="Top Ad"
              className="w-full rounded"
            />
          </div>
        </div>
  
        {/* ================= MAIN LAYOUT ================= */}
        <div className="max-w-[980px] mx-auto flex gap-6">
  
          {/* ================= LEFT: ARTICLE ================= */}
          <article className="flex-1 max-w-[700px]">
  
            {/* Headline */}
            <h1 className="text-[22px] font-bold text-black leading-[1.3] mb-3">
              Oakridge Bachupally holds AURA 2026 alumni meet, celebrating lasting connections
            </h1>
  
            {/* Meta */}
            <div className="flex items-center gap-3 text-[11px] text-gray-500 mb-4">
              <span className="uppercase">Spotlight</span>
              <span>Jan 19, 2026, 18:22 IST</span>
              <span className="flex items-center gap-1">
                💬 1 Comment
              </span>
              <span>🔗 Share</span>
              <span className="border px-1 text-[10px]">A A</span>
            </div>
  
            {/* Intro Image */}
            <div className="mb-4">
              <img
                src="https://picsum.photos/seed/group/760/380"
                alt=""
                className="w-full rounded"
              />
            </div>
  
            {/* Content */}
            <div className="text-[14px] text-[#333] leading-[1.7] space-y-4">
              <p>
                Alumni meets are a chance to step back and revisit the chapters that shaped our lives.
                They bring together people who shared classrooms, playgrounds, labs, and experiences,
                often sparking laughter and memories that time had tucked away.
              </p>
  
              <p>
                These gatherings offer former students a space to reconnect, exchange stories,
                and see how far everyone has come. Conversations can range from shared adventures
                to career journeys, reminding everyone of the threads that tie them together.
              </p>
  
              <p>
                Beyond nostalgia, alumni meets foster a sense of community that lasts long after
                school years end. They remind attendees that bonds formed early can continue
                to inspire, support, and influence even decades later.
              </p>
  
              <p>
                <a href="#" className="text-blue-600 hover:underline">
                  Oakridge International School
                </a>, Bachupally hosted AURA 2026, its alumni meet,
                bringing together former students for an evening of reconnection,
                nostalgia, and celebration.
              </p>
  
              <h3 className="font-semibold text-black">
                A day of reminiscence and engagement
              </h3>
  
              <p>
                The evening unfolded with an address from principal Anuradha Varma,
                followed by dance performances, a treasure hunt, and band performances.
                The former students were treated to a retrospective presentation and
                heartfelt speeches by students and teachers.
              </p>
            </div>
  
            {/* Second Image */}
            <div className="my-6">
              <img
                src="https://picsum.photos/seed/event/760/420"
                alt=""
                className="w-full rounded"
              />
            </div>
  
            <p className="text-[14px] text-[#333] leading-[1.7]">
              The event concluded with DJ sessions, refreshments, photo opportunities,
              and alumni testimonials, creating an atmosphere of joy and togetherness.
              Every moment reflected Oakridge’s commitment to nurturing lifelong relationships.
            </p>
  
          </article>
  
          {/* ================= RIGHT: SIDEBAR ================= */}
          <aside className="w-[320px] flex-shrink-0 space-y-6">
  
            {/* Indeed Ad */}
            <div className="border rounded p-4 text-center">
              <img
                src="https://picsum.photos/seed/indeed/300/200"
                alt=""
                className="mx-auto mb-3"
              />
              <p className="font-semibold mb-2">Let’s make your next hire quick</p>
              <button className="bg-blue-600 text-white text-[12px] px-4 py-2 rounded">
                Sponsor your job
              </button>
            </div>
  
            {/* Also Watch */}
            <div>
              <h3 className="text-[14px] font-bold text-black mb-3">
                Also Watch
              </h3>
  
              <div className="space-y-3">
                {[
                  "Huge explosion blows up New York high-rise block",
                  "Putin shocks Trump with missile move",
                  "Russia pushes Ukraine further"
                ].map((title, i) => (
                  <div key={i} className="flex gap-2">
                    <img
                      src={`https://picsum.photos/seed/watch${i}/120/70`}
                      className="w-[120px] h-[70px] object-cover rounded"
                    />
                    <p className="text-[12px] leading-[1.4]">
                      {title}
                    </p>
                  </div>
                ))}
              </div>
  
              <button className="text-red-600 text-[12px] mt-2">
                View More Videos
              </button>
            </div>
  
            {/* Amazon Ad */}
            <div>
              <img
                src="https://picsum.photos/seed/amazon/320/250"
                alt=""
                className="w-full rounded"
              />
            </div>
  
            {/* Trending Stories */}
            <div>
              <h3 className="text-[14px] font-bold text-black mb-3">
                Trending Stories
              </h3>
  
              <div className="space-y-2 text-[12px] text-gray-700">
                <p>EU-India trade deal: European Union vs India</p>
                <p>12 more companies enter the IPO market</p>
                <p>Budget 2026 expectations live updates</p>
                <p>Embassy project could take off soon</p>
                <p>Blackouts strike after natural cycle mishap</p>
              </div>
            </div>
  
          </aside>
        </div>
      </div>
    );
  }
  
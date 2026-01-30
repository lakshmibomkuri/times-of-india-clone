import Image from "next/image";

type Item = {
  title: string;
  source: string;
  image: string;
};
const groups = [
    {
      topRow: [
        {
          title: "Glaucoma and cataract can disappear! And vision can return quickly",
          source: "Vision Veda | Sponsored",
          image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Blurry Vision & Fading Eyesight? Do This Immediately!",
          source: "Vision Veda | Sponsored",
          image:
            "https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!",
          source: "TradeWise | Sponsored",
          image:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      ],
      secondRow: [
        {
          title: "Prime Swing Trader Mr. Hemant Shares His Winning Strategy for Free!",
          source: "TradeWise | Sponsored",
          image:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "AI-powered hearing aid at surprising cost. Recommended by audiologist",
          source: "Hearing Aids | Sponsored",
          image:
            "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
    {
      topRow: [
        {
          title: "Natural Remedies That Improve Your Vision Fast",
          source: "Health Today | Sponsored",
          image:
          "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "How To Protect Your Eyes From Digital Strain",
          source: "Vision Care | Sponsored",
          image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Latest Innovations In Hearing Aid Technology",
          source: "Audio Experts | Sponsored",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      ],
      secondRow: [
        {
          title: "Improve Focus & Reduce Eye Fatigue with These Exercises",
          source: "Eye Wellness | Sponsored",
          image:
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Secrets to Healthy Vision at Any Age",
          source: "Vision Pro | Sponsored",
          image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
      ],
    },
  ];
  
export default function YouMayLike(){
  return (
    <section className="mx-auto max-w-7xl mt-5">
      <h2 className="mb-6 text-lg font-semibold">You May Like</h2>

      {groups.map((group, i) => (
        <div key={i} className="mb-12">
          {/* TOP ROW - 3 CARDS */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {group.topRow.map((item, idx) => (
              <div key={idx}>
                <div className="relative aspect-[4/3] min-h-[200px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium leading-snug">{item.title}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.source}</span>
                  <button className="rounded-full border px-3 py-1 text-xs">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SECOND ROW - 2 CARDS */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {group.secondRow.map((item, idx) => (
              <div key={idx}>
                <div className="relative aspect-[16/9] min-h-[180px] w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-medium leading-snug">{item.title}</p>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{item.source}</span>
                  <button className="rounded-full border px-3 py-1 text-xs">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

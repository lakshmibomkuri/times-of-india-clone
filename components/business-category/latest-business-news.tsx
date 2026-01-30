import { ChevronRight } from "lucide-react";
import Image from "next/image";

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  published: string;
};

const videos: Video[] = [
  {
    id: "1",
    title:
      "Money Mantra Ep 7 | How to turn stock market trading into a full-time career, ft. Mukul Agrawal",
    thumbnail: "https://placehold.co/1280x720/facc15/1f2937?text=Money+Mantra+Ep+7",
    duration: "55:19",
    published: "a year ago",
  },
  {
    id: "2",
    title:
      "Money Mantra Ep 6 | How to be a successful venture capitalist, ft Sudhir Sethi",
    thumbnail: "https://placehold.co/1280x720/22c55e/052e16?text=Money+Mantra+Ep+6",
    duration: "37:39",
    published: "a year ago",
  },
  {
    id: "3",
    title:
      "Money Mantra Ep 5 | Labour Law Advisor founders share their content creation journey",
    thumbnail: "https://placehold.co/1280x720/3b82f6/eff6ff?text=Money+Mantra+Ep+5",
    duration: "38:58",
    published: "a year ago",
  },
  {
    id: "4",
    title:
      "Dhan Ki Baat | Role of policy making in financial literacy",
    thumbnail: "https://placehold.co/1280x720/ef4444/fff5f5?text=Dhan+Ki+Baat",
    duration: "42:10",
    published: "2 years ago",
  },
  {
    id: "5",
    title:
      "Money Mantra Ep 5 | Labour Law Advisor founders share their content creation journey",
    thumbnail: "https://placehold.co/1280x720/3b82f6/eff6ff?text=Money+Mantra+Ep+5",
    duration: "38:58",
    published: "a year ago",
  },
  {
    id: "6",
    title:
      "Dhan Ki Baat | Role of policy making in financial literacy",
    thumbnail: "https://placehold.co/1280x720/ef4444/fff5f5?text=Dhan+Ki+Baat",
    duration: "42:10",
    published: "2 years ago",
  },
];

export default function LatestVideosPage() {
  const featured = videos[0];
  const list = videos.slice(1);

  return (
    <div className="mt-5 rounded-lg max-w-[980px]">
      {/* Heading */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">Latest Business Videos</h2>
        <ChevronRight className="w-4 h-4" />
      </div>


      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT: Featured Video */}
        <div className="lg:col-span-2">
          <div className="relative rounded-xl overflow-hidden cursor-pointer">
            <Image
              src={featured.thumbnail}
              alt={featured.title}
              width={800}
              height={450}
              className="w-full object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black/60 text-white text-3xl w-16 h-16 rounded-full flex items-center justify-center">
                ▶
              </div>
            </div>

            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h2 className="text-white font-semibold text-lg line-clamp-2">
                {featured.title}
              </h2>
              <p className="text-gray-300 text-sm">
                {featured.published}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: Video List */}
        <div className="flex flex-col gap-4 max-h-[350px] overflow-y-auto">
          {list.map((video) => (
            <div
              key={video.id}
              className="flex gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer transition"
            >
              {/* Thumbnail */}
              <div className="relative min-w-[120px] p-2 rounded overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1 rounded">
                  {video.duration}
                </span>
              </div>

              {/* Info */}
              <div className="flex flex-col text-sm">
                <p className="font-medium line-clamp-2">
                  {video.title}
                </p>
                <span className="text-gray-500 text-xs">
                  {video.published}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

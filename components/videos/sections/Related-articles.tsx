import Image from "next/image";

type Article = {
  title: string;
  time: string;
  image: string;
};

const articles: Article[] = [
  {
    title:
      "New fissure? After Greenland thaw, Trump-Europe tensions reignite ...",
    time: "2 hours ago",
    image:
      "https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Middle East on edge: Lufthansa, Air France and others cancel flights...",
    time: "4 hours ago",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Leon Marchand’s net worth: How Olympic swimming gold and world...",
    time: "11 hours ago",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Who are Didier Drogba’s children Isaac and Iman? Family life of...",
    time: "19 hours ago",
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop",
  },

  // SECOND ROW
  {
    title:
      "‘Running beautifully’: Trump says ‘Board of Peace’ has started work...",
    time: "1 day ago",
    image:
      "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "“No contracts, no papers”: Lucas Hernández accused of exploiting...",
    time: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Donald Trump shadow over FIFA World Cup: Will France boycott US...",
    time: "2 days ago",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title:
      "Miguel Indurain’s net worth timeline (2016–2026): From podium wins...",
    time: "3 days ago",
    image:
      "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function RelatedArticles(){
  return (
    <section className="mx-auto max-w-7xl">
      <h2 className="mb-6 text-xl font-bold">Related Articles</h2>

      {/* GRID — auto flows into multiple rows */}
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article, index) => (
          <div key={index}>
            {/* Image */}
            <div className="relative aspect-video w-full rounded-2xl">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-xl"
                sizes="(max-width: 1024px) 100vw, 25vw"
              />
            </div>

            {/* Text */}
            <div className="mt-3">
              <p className="cursor-pointer text-sm font-semibold leading-snug hover:underline">
                {article.title}
              </p>
              <span className="mt-1 block text-xs text-gray-500">
                {article.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

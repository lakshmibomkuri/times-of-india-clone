import Image from "next/image";
import Link from "next/link";

type Card = {
  image: string;
  title: string;
  description?: string;
  source: string;
  cta?: string;
};

const cards: Card[] = [
  {
    image:
      "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=600&h=340&fit=crop",
    title: `"No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!"`,
    description:
      "IIT Alum & Ex-Citi Banker’s Swing Trading Secrets — Learn Live Free!",
    source: "TradeWise",
    cta: "Learn More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=600&h=340&fit=crop",
    title:
      "Balanagar Township – This AI-Powered hearing aid is a hit in India. Know why.",
    description: "Recommended by audiologist",
    source: "Hearing Aids",
    cta: "Learn More",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=340&fit=crop",
    title: "Only 2% Traders Know this Powerful Intraday Strategy",
    description:
      "Learn elite scalping strategy from Mr. Pankaj — 6+ years market expert.",
    source: "TradeWise",
    cta: "Learn More",
  },
];

export default function YouMayLikeSection() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      <div>
        <h2 className="mb-4 text-m font-semibold text-gray-900">
          You May Like
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={225}
                className="rounded-md object-cover"
              />

              <h3 className="mt-3 text-sm font-semibold text-gray-900">
                {card.title}
              </h3>

              {card.description && (
                <p className="mt-1 text-sm text-gray-600">
                  {card.description}
                </p>
              )}

              <span className="mt-2 text-xs text-gray-500">
                {card.source}
              </span>

              {card.cta && (
                <Link
                  href="#"
                  className="mt-2 inline-block w-fit rounded border border-gray-800 px-3 py-1 text-xs font-medium text-gray-800 hover:bg-gray-800 hover:text-white"
                >
                  {card.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 text-right text-xs text-gray-500">
          Sponsored Links by Taboola
        </div>
      </div>
    </section>
  );
}

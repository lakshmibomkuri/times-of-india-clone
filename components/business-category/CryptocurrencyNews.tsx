import { ChevronRight } from "lucide-react";
import Image from "next/image";

const cryptoNewsSection = {
  lead: {
    title: "Fried acknowledges ‘mistakes’; testifies he didn’t defraud anyone",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=800&q=80",
  },
  middleList: [
    "Crypto isn’t dead, it’s evolving rapidly to create a more secure ecosystem",
    "US tightens crackdown on crypto with lawsuits against exchanges",
    "Bitcoin drops about 4%, slips below $30,000 amid regulatory fears",
    "Coinbase CEO: Crypto firms will develop ’offshore banking’ solutions",
    "Cryptoverse: Bitcoin miners escape the bear trap",
  ],
  bottomCards: [
    "Ether jumps to 11-month high in wake of software upgrade",
    "Cryptocurrencies important part of discussion under IMF",
    "US regulator sues top crypto exchange Binance, CEO for misconduct",
    "Sitharaman urges IMF to develop globally coordinated crypto framework",
  ],
  rightStories: [
    {
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=80&q=80",
      title: "Coinbase CEO Armstrong decries rumors of possible US SEC ban on crypto",
    },
    {
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=80&q=80",
      title:
        "Budget proposes 30% TDS on net winnings in online games, removes ambiguity",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=80&q=80",
      title: "The man saving the world from the next big crypto scam",
    },
  ],
};

export default function CryptocurrencyNews() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      {/* TITLE */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-m font-bold tracking-wide">CryptoCurrency News</h2>
        <ChevronRight className="w-4 h-4" />
      </div>


      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-12 gap-4">
        {/* LEFT SIDE (8 COLS) */}
        <div className="col-span-12 md:col-span-8">
          {/* TOP ROW: FEATURED + MIDDLE */}
          <div className="grid grid-cols-12 gap-4">
            {/* FEATURED */}
            <div className="col-span-7 relative rounded-lg overflow-hidden  h-[200px]">
              <Image
                src={cryptoNewsSection.lead.image}
                alt={cryptoNewsSection.lead.title}
                width={700}
                height={420}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-semibold">
                {cryptoNewsSection.lead.title}
              </p>
            </div>

            {/* MIDDLE LIST */}
            <div className="col-span-5">
  <ul className="space-y-3 text-sm">
    {cryptoNewsSection.middleList.map((text, i) => (
      <li
        key={i}
        className={
          i !== cryptoNewsSection.middleList.length - 1
            ? "border-b pb-2 truncate"
            : "truncate"
        }
      >
        <span className="block whitespace-nowrap overflow-hidden text-ellipsis">
          {text}
        </span>
      </li>
    ))}
  </ul>
</div>

          </div>

          {/* BOTTOM ROW: TEXT ONLY */}
          <div className="grid grid-cols-4 gap-4 mt-4 text-sm text-gray-700">
            {cryptoNewsSection.bottomCards.map((text, i) => (
              <div key={i} className="pr-3 border-r last:border-r-0 border-gray-300">
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (4 COLS) */}
        <aside className="col-span-12 md:col-span-4 space-y-4">
          {cryptoNewsSection.rightStories.map((item, i) => (
            <div key={i} className="flex gap-3">
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={70}
                className="rounded flex-shrink-0 object-cover"
              />
              <p className="text-sm leading-snug">{item.title}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}

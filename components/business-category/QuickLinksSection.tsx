import Link from "next/link";

const links = [
  [
    "Silver Rate Today",
    "Income Tax Calculator",
    "Gold Rate Today",
    "Bank Holidays January",
  ],
  [
    "Platinum Rates Today",
    "Financial Calculator",
    "Aadhaar Card",
    "Public Holidays January",
  ],
  [
    "CIBIL Score Tips",
    "Savings Growth Calculator",
    "Golden Visa",
    "Bank IFSC Codes",
  ],
  [
    "Income Tax Slabs",
    "Bank Holiday Tomorrow",
    "Bank Holiday Today",
    "India Business News",
  ],
  [
    "Infrastructure News",
    "Market Overview",
    "Stock Market Holidays",
    "Income Tax Return File",
  ],
];

export default function QuickLinksSection() {
  return (
    <section className="mt-5 rounded-lg max-w-[980px]">
      <div>
        <h3 className="mb-4 text-sm font-semibold uppercase text-gray-900">
          Quick Links
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {links.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-2">
              {column.map((item, index) => (
                <li key={index}>
                  <Link
                    href="#"
                    className="text-sm text-gray-700 hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}

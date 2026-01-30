"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function LegalFullSection() {
  const articles = [
    { title: "Even if marriage never legally existed, maintenance can still...", image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=130&fit=crop" },
    { title: "Bahu is a relative, but not by SEBI definition? The takeover rule dilemma &...", image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=130&fit=crop" },
    { title: "Wife's qualification no ground to deny maintenance: HC", image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=200&h=130&fit=crop" },
    { title: "Sympathy for accused cannot override the law, rules SC", image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?w=200&h=130&fit=crop" },
    { title: "Supreme Court to examine immunity for CEC & ECs after PIL flags...", image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?w=200&h=130&fit=crop" },
    { title: "Court proceedings distorted, High Court orders removal of reels", image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=200&h=130&fit=crop" }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Legal</h2>
        <ChevronRight className="w-5 h-5 text-gray-600" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {articles.map((article, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-[3/2] rounded overflow-hidden mb-2">
              <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover group-hover:scale-105 transition-transform" />
            </div>
            <h3 className="text-xs font-medium text-gray-900 group-hover:text-red-600 line-clamp-3">
              {article.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

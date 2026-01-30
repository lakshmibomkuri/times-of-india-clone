"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";

export function HealthFullSection() {
  const articles = [
    { title: "Thyroid cancer often hides in plain sight: Doctor urges women, those with...", image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=200&h=130&fit=crop" },
    { title: "Cervical cancer can be silent in stage 1: Doctors explain how it can be...", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=130&fit=crop" },
    { title: "'My Rs 50 lakh policy ditched me in the darkest hour': Why your health...", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=130&fit=crop" },
    { title: "Twice a cancer survivor, invites her doctor to her 50th wedding anniversar...", image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=200&h=130&fit=crop" },
    { title: "Not baby fat: Extra weight can harm a child's liver, warns doctor", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=130&fit=crop" },
    { title: "Ever cracked an egg with a red egg white? Here's what it means and how t...", image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7?w=200&h=130&fit=crop" }
  ];

  return (
    <section className="py-4 border-b border-dashed border-gray-300">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-xl font-bold text-gray-900">Health+</h2>
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

"use client";

import Image from "next/image";

export function SharedAdStrips() {
  return (
    <>
      {/* Left Ad Strip - AU Small Finance Bank */}
      <div className="fixed left-0 top-0 w-[145px] h-full bg-[#f5e6d3] z-40 hidden xl:block">
        <div className="h-full flex flex-col">
          {/* AU Bank Logo */}
          <div className="p-3 flex justify-center">
            <div className="flex items-center gap-1">
              <span className="text-orange-600 font-bold text-[18px]">AU</span>
              <div className="text-[7px] leading-tight text-orange-600 text-left">
                <div>SMALL</div>
                <div>FINANCE</div>
                <div className="font-bold">BANK</div>
              </div>
            </div>
          </div>
          
          {/* Celebrity Image - Full Width */}
          <div className="relative flex-1 w-full">
            <Image
              src="https://picsum.photos/seed/celeb-left/145/600"
              alt="Brand Ambassador"
              fill
              className="object-cover object-top"
            />
            
            {/* Interest Rate Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600/95 to-transparent pt-16 pb-4 px-3">
              <div className="text-center text-white">
                <div className="flex items-baseline justify-center">
                  <span className="text-[36px] font-bold">6.5</span>
                  <span className="text-[18px] font-bold">%</span>
                </div>
                <p className="text-[9px]">p.a. Interest on</p>
                <p className="text-[9px]">AU Savings Account</p>
                <button className="bg-yellow-400 text-orange-900 text-[10px] px-4 py-1.5 rounded mt-2 font-bold hover:bg-yellow-300 transition-colors">
                  Open Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Ad Strip - AU Small Finance Bank */}
      <div className="fixed right-0 top-0 w-[145px] h-full bg-[#f5e6d3] z-40 hidden xl:block">
        <div className="h-full flex flex-col">
          {/* AU Bank Logo */}
          <div className="p-3 flex justify-center">
            <div className="flex items-center gap-1">
              <span className="text-orange-600 font-bold text-[18px]">AU</span>
              <div className="text-[7px] leading-tight text-orange-600 text-left">
                <div>SMALL</div>
                <div>FINANCE</div>
                <div className="font-bold">BANK</div>
              </div>
            </div>
          </div>
          
          {/* Celebrity Image - Full Width */}
          <div className="relative flex-1 w-full">
            <Image
              src="https://picsum.photos/seed/celeb-right/145/600"
              alt="Brand Ambassador"
              fill
              className="object-cover object-top"
            />
            
            {/* Interest Rate Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-600/95 to-transparent pt-16 pb-4 px-3">
              <div className="text-center text-white">
                <div className="flex items-baseline justify-center">
                  <span className="text-[36px] font-bold">6.5</span>
                  <span className="text-[18px] font-bold">%</span>
                </div>
                <p className="text-[9px]">p.a. Interest on</p>
                <p className="text-[9px]">AU Savings Account</p>
                <button className="bg-yellow-400 text-orange-900 text-[10px] px-4 py-1.5 rounded mt-2 font-bold hover:bg-yellow-300 transition-colors">
                  Open Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// type Bank = {
//   name: string;
//   icon: string;
//   href: string;
// };

// const banks: Bank[] = [
//   { name: "Indian Bank IFSC Code", icon: "indian.jpg", href: "#" },
//   { name: "Union Bank IFSC Code", icon: "union.png", href: "#" },
//   { name: "Yes Bank IFSC Code", icon: "yes.png", href: "#" },

//   { name: "Punjab National Bank IFSC Code", icon: "punjab.png", href: "#" },
//   { name: "Kotak Mahindra Bank IFSC Code", icon: "kotak.png", href: "#" },
//   { name: "CITI Bank IFSC Code", icon: "citi.png", href: "#" },

//   { name: "Axis Bank IFSC Code", icon: "axis.png", href: "#" },
//   { name: "Bank of Maharashtra IFSC", icon: "bank-of-maharastra.png", href: "#" },
//   { name: "Canara Bank IFSC Code", icon: "canara.png", href: "#" },

//   { name: "HDFC Bank IFSC Code", icon: "hdfc.png", href: "#" },
//   { name: "SBI IFSC Code", icon: "sbi.png", href: "#" },
//   { name: "ICICI Bank IFSC Code", icon: "icici.png", href: "#" },
// ];
// const BankIcon = () => (
//     <span className="flex h-5 w-5 items-center justify-center text-gray-600">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="1.75"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       >
//         <line x1="3" y1="22" x2="21" y2="22" />
//         <line x1="6" y1="18" x2="6" y2="11" />
//         <line x1="10" y1="18" x2="10" y2="11" />
//         <line x1="14" y1="18" x2="14" y2="11" />
//         <line x1="18" y1="18" x2="18" y2="11" />
//         <polygon points="12 2 20 7 4 7" />
//       </svg>
//     </span>
//   );
  

// export default function PopularBanksIFSC() {
//   return (
//     <section className="mt-5 rounded-lg max-w-[980px]">
//       <div>
//         {/* Title */}
//         <h2 className="mb-4 text-m font-semibold text-gray-800">
//           Popular Banks IFSC Codes <span className="ml-1 text-gray-400">›</span>
//         </h2>

//         {/* Grid */}
//         <div className="grid grid-cols-3 border border-gray-200">
//           {banks.map((bank, index) => (
//             <Link
//               key={index}
//               href={bank.href}
//               className="flex items-center gap-3 border-b border-r border-gray-200 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50
//               [&:nth-child(3n)]:border-r-0"
//             >
//               <Image
//                 src={bank.icon}
//                 alt={bank.name}
//                 width={28}
//                 height={28}
//                 className="object-contain"
//               />
//               <span>{bank.name}</span>
//             </Link>
//           ))}
//         </div>

//         {/* Advertisement */}
//         <div className="mt-6 text-center">
//           <span className="mb-1 block text-xs text-gray-400">Advertisement</span>
//           <Image
//             src="https://tpc.googlesyndication.com/simgad/9056399810261966114?"
//             alt="Advertisement"
//             width={970}
//             height={90}
//             className="mx-auto h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import Image from "next/image";
import Link from "next/link";

type Bank = {
  name: string;
  icon: string;
  href: string;
};

const banks: Bank[] = [
  { name: "Indian Bank IFSC Code", icon: "indian.jpg", href: "#" },
  { name: "Union Bank IFSC Code", icon: "union.png", href: "#" },
  { name: "Yes Bank IFSC Code", icon: "yes.png", href: "#" },

  { name: "Punjab National Bank IFSC Code", icon: "punjab.png", href: "#" },
  { name: "Kotak Mahindra Bank IFSC Code", icon: "kotak.png", href: "#" },
  { name: "CITI Bank IFSC Code", icon: "citi.png", href: "#" },

  { name: "Axis Bank IFSC Code", icon: "axis.png", href: "#" },
  { name: "Bank of Maharashtra IFSC", icon: "bank-of-maharastra.png", href: "#" },
  { name: "Canara Bank IFSC Code", icon: "canara.png", href: "#" },

  { name: "HDFC Bank IFSC Code", icon: "hdfc.png", href: "#" },
  { name: "SBI IFSC Code", icon: "sbi.png", href: "#" },
  { name: "ICICI Bank IFSC Code", icon: "icici.png", href: "#" },
];

const BankIcon = () => (
  <span className="flex h-5 w-5 items-center justify-center text-gray-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  </span>
);

export default function PopularBanksIFSC() {
  return (
    <section className="mt-5 rounded-lg max-w-full sm:max-w-full mx-auto">
      <div>
        {/* Title */}
        <h2 className="mb-4 text-lg sm:text-xl font-semibold text-gray-800">
          Popular Banks IFSC Codes <span className="ml-1 text-gray-400">›</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 border border-gray-200">
          {banks.map((bank, index) => (
            <Link
              key={index}
              href={bank.href}
              className="flex items-center gap-3 border-b border-r border-gray-200 px-4 py-3 text-sm text-gray-800 hover:bg-gray-50
              [&:nth-child(3n)]:border-r-0"
            >
              <Image
                src={bank.icon}
                alt={bank.name}
                width={28}
                height={28}
                className="object-contain"
              />
              <span>{bank.name}</span>
            </Link>
          ))}
        </div>

        {/* Advertisement */}
        <div className="mt-6 text-center">
          <span className="mb-1 block text-xs text-gray-400">Advertisement</span>
          <Image
            src="https://tpc.googlesyndication.com/simgad/9056399810261966114?"
            alt="Advertisement"
            width={970}
            height={90}
            className="mx-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
}

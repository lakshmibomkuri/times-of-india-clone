import Image from 'next/image';

const newsData = {
    hockey: {
      main: {
        img:
          'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80', // hockey players in action
        title: 'Dilip Tirkey wants to take HIL to north India next season',
      },
      items: [
        {
          img:
            'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=100&q=80', // hockey team celebrating
          title: 'Kalinga Lancers crowned new HIL champions',
        },
        {
          img:
            'https://images.unsplash.com/photo-1526406915890-8b231df6d47d?auto=format&fit=crop&w=100&q=80', // woman hockey player portrait
          title: 'Indian women’s hockey team recognised: Savita Punia on Padma award',
        },
        {
          img:
            'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=100&q=80', // hockey player in action
          title: 'Manpreet nears India cap record amid unclear future with national team',
        },
      ],
    },
    boxing: {
      main: {
        img:
          'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80', // boxer focused in ring
        title: 'Vijender Singh appointed as member of the Asian Boxing Council',
      },
      items: [
        {
          img:
            'https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=100&q=80', // female boxer training
          title:
            'Mary Kom vs Onler Karong divorce drama: Onler alleges affairs; Mary claims property…',
        },
        {
          img:
            'https://images.unsplash.com/photo-1527515637461-61db4d9b8652?auto=format&fit=crop&w=100&q=80', // emotional boxer post-match
          title:
            '‘God kept me in the presence of great men’: Joshua breaks down after tragic loss',
        },
        {
          img:
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=100&q=80', // boxing ring chaos or match
          title:
            'Bite allegation, ring chaos rock National Boxing Championships; Nikhat& Minakshi win',
        },
      ],
    },
    golf: {
      main: {
        img:
          'https://picsum.photos/id/1016/400/250', // golfer swinging
        title: 'Govt must intervene to sort golf mess: Jeev Milkha Singh',
      },
      items: [
        {
          img:
            'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=100&q=80', // female golfer in action
          title:
            'IGPL Tour | Pranavi creates history: First Indian woman to win professional golf title against…',
        },
        {
          img:
            'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=100&q=80', // golf tournament or player
          title:
            'Donald Trump’s granddaughter Kai Trump to debut on LPGA Tour with sponsor’s…',
        },
        {
          img:
            'https://picsum.photos/id/1035/100/100', // golf trophy or winner celebration
          title: "Tommy’s golf opera finds its final act! Fleetwood gets Indian Golf’s biggest cheque",
        },
      ],
    },
  };
  

const OtherSportsNews: React.FC = () => {
  return (
    <section className="mt-3 sm:mt-5 px-2 sm:px-0">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg font-bold">Other Sports News</h2>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Hockey News */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm sm:text-base cursor-pointer hover:underline">
              Hockey News &gt;
            </h3>
          </div>

          {/* Main Card */}
          <div className="rounded-md overflow-hidden relative mb-3 cursor-pointer group">
            <Image
              src={newsData.hockey.main.img}
              alt="Hockey Main"
              width={360}
              height={200}
              className="object-cover w-full h-[160px] sm:h-[200px] group-hover:brightness-90 transition"
            />
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white font-semibold text-xs sm:text-sm md:text-base max-w-[90%]">
              {newsData.hockey.main.title}
            </div>
          </div>

          {/* Smaller Items */}
          <div className="space-y-2 sm:space-y-3">
            {newsData.hockey.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              >
                <div className="w-12 sm:w-14 h-8 sm:h-10 relative flex-shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Hockey item ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Boxing News */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm sm:text-base cursor-pointer hover:underline">
              Boxing News &gt;
            </h3>
          </div>

          {/* Main Card */}
          <div className="rounded-md overflow-hidden relative mb-3 cursor-pointer group">
            <Image
              src={newsData.boxing.main.img}
              alt="Boxing Main"
              width={360}
              height={200}
              className="object-cover w-full h-[160px] sm:h-[200px] group-hover:brightness-90 transition"
            />
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white font-semibold text-xs sm:text-sm md:text-base max-w-[90%]">
              {newsData.boxing.main.title}
            </div>
          </div>

          {/* Smaller Items */}
          <div className="space-y-2 sm:space-y-3">
            {newsData.boxing.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              >
                <div className="w-12 sm:w-14 h-8 sm:h-10 relative flex-shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Boxing item ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Golf News */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-sm sm:text-base cursor-pointer hover:underline">
              Golf News &gt;
            </h3>
          </div>

          {/* Main Card */}
          <div className="rounded-md overflow-hidden relative mb-3 cursor-pointer group">
            <Image
              src={newsData.golf.main.img}
              alt="Golf Main"
              width={360}
              height={200}
              className="object-cover w-full h-[160px] sm:h-[200px] group-hover:brightness-90 transition"
            />
            <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 text-white font-semibold text-xs sm:text-sm md:text-base max-w-[90%]">
              {newsData.golf.main.title}
            </div>
          </div>

          {/* Smaller Items */}
          <div className="space-y-2 sm:space-y-3">
            {newsData.golf.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
              >
                <div className="w-12 sm:w-14 h-8 sm:h-10 relative flex-shrink-0 rounded-sm overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Golf item ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advertisement Banner from uploaded image */}
      <div className="mt-4 sm:mt-6 rounded-md overflow-hidden flex flex-col sm:flex-row items-center bg-gray-50">
        {/* Right banner image */}
        <div className="flex-shrink-0 p-2 sm:p-5">
          <Image
            src="https://picsum.photos/seed/car/1200/90"
            alt="Sports Advertisement Banner"
            width={400}
            height={450}
            className="object-cover h-[60px] sm:h-[80px] lg:h-[100px] w-auto"
          />
        </div>
      </div>

    </section>
  );
};

export default OtherSportsNews;

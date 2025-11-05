import { useState } from "react";

export default function BestGame1() {

    const mediaImages = [
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a9837d4a15412bdfc6d/08_lis1_chloe_update_existing-yjktgkdb9t-i0vRzirb3.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a805a1a8ff866023691/lis2-1qljnrxrp-m_WMoxA75.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620aca37d4a15412be01a4/05_bts_rachel-lqhq5e4yh-97Db33by1.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620abb5a1a8ff866023e16/06_bts_chloes_room-wdcgpovcng-SE63npSyL.webp?quality=85&width=10240",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ae437d4a15412be051e/03_lis1_max_investigates-hmif3mucv-IJzG_pit2.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a9f5a1a8ff866023975/08_bts_chloe_02_update_existing-sbdf40n7r4-km2Jx6jI9.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ade5a1a8ff866024190/04_bts_david_and_joyce-hvl9hi3ufn-_4_2-jqRZ.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a7a5a1a8ff86602356a/lis5-wv2vzrw1u-eXFSlPTSM.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ad937d4a15412be0361/04_lis1_max_dark_room-vgzuqvemyf-kkNmrF7ZM.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620aea5a1a8ff86602434d/03_bts_rachel_and_chloe_update_existing-xslbewkuy-GKG2rKO1q.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a9237d4a15412bdfab0/bts2-cpzgj8ms0-81QXotqdt.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a8737d4a15412bdf85d/lis1-r4iz877zu-dVVcBIujk.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620af137d4a15412be06db/02_lis1_max-d-1jgp95oh-4qLLO9oF0.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ac137d4a15412bdffe7/05_lis1_warren-zouq1a3uk-SDpdYjCx0.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620aa537d4a15412bdfd94/07_lis1_max_2-180v_fcdk-RFVivAc_8.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620a8c5a1a8ff8660237b8/bts5-fx5vsnaui-vpWkaxQjq.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620aab5a1a8ff866023bc8/07_damon_new-e7_ozw-m0-tgOPjHLHr.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ad35a1a8ff866023fd3/lis4-di1ajrkie-MAvFpfOUK.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620af75a1a8ff8660245a0/02_bts_chloe-tr6o9x386p-1--ZbPjXsGF8.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620b0137d4a15412be0898/01_bts_chloe_update_existing-f9erxlpqe-nkO9ooCKw.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620ab35a1a8ff866023cef/06_lis1_chloe_lighthouse_update_existing-ym3-ejqr6q-bZTyB4Brz.webp?quality=85&width=1024",
        "https://fyre.cdn.sewest.net/life-is-strange-hub/66620b205a1a8ff86602475d/01_lis1_max_and_chloe_truck-thmqqlx2n-A3jtDTqwj.webp?quality=85&width=1024",
    ];


    const [selectedImage, setSelectedImage] = useState(null);
    const [showAll, setShowAll] = useState(false);
    return (
     <div className="bg-blue-800 w-full overflow-x-hidden">
      {/* 🟦 TOP SECTION */}
      <div className="px-2 py-5 flex justify-center">
        <div
          className="relative rounded-4xl border-2 w-full md:h-[1200px] h-[400px] overflow-hidden"
          style={{
            backgroundImage:
              "url('https://fyre.cdn.sewest.net/life-is-strange-hub/6634aba837d4a15412aaed4b/life-is-strange-2024-2--nN3g9MGLt.jpg?quality=85&width=3840')",
            backgroundSize: "cover",
            backgroundPosition: "center 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-opacity-40 rounded-4xl"></div>

          {/* Text */}
          <div className="relative z-10 text-black px-4 md:px-5 py-40 md:py-130 font-extrabold text-left">
            <h1 className="flex flex-wrap md:flex-nowrap items-center text-3xl sm:text-5xl md:text-7xl gap-2 leading-tight">
              <span>LIFE</span>
              <span className="text-xl sm:text-3xl md:text-4xl self-center">IS</span>
              <span>STRANGE</span>
            </h1>
            <h1 className="text-lg sm:text-2xl md:text-3xl mt-2">Remastered Collection.</h1>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 py-5">
              <a
                href="https://youtu.be/jY5neHkqT_Y?list=TLGG4ceRLGVz4E0wNTExMjAyNQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="hover:bg-cyan-300 text-center border-4 border-red-600 hover:border-amber-300 px-4 h-12 sm:h-14 w-52 sm:w-60 bg-white rounded-3xl transition-all duration-300 flex justify-center items-center">
                  <h1 className="text-black text-lg sm:text-xl md:text-2xl">
                    Watch Trailer
                  </h1>
                </div>
              </a>

              <a href="/learn-more">
                <div className="hover:bg-cyan-300 text-center border-4 border-amber-300 hover:border-red-600 px-4 h-12 sm:h-14 w-52 sm:w-60 bg-white rounded-3xl transition-all duration-300 flex justify-center items-center">
                  <h1 className="text-black text-lg sm:text-xl md:text-2xl">
                    Learn More
                  </h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🟥 VIDEO SECTION */}
      <div className="flex justify-center px-2 py-5">
        <div className="relative h-[400px] sm:h-[500px] md:h-[800px] p-2 rounded-4xl border-2 w-full bg-cover bg-no-repeat">
          <div className="absolute top-0 left-0 w-full h-full z-0 rounded-2xl overflow-hidden">
            <iframe
              className="w-full h-full object-cover"
              src="https://www.youtube.com/embed/AURVxvIZrmU?autoplay=1&mute=1&controls=0&loop=1&playlist=AURVxvIZrmU"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>

          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

          <div className="relative z-20 text-white text-center md:text-left flex flex-col justify-center items-center md:items-start py-8 md:py-30 px-4 font-extrabold">
            <h1 className="flex flex-wrap md:flex-nowrap items-center gap-2 italic justify-center md:justify-start">
              <span className="text-4xl sm:text-5xl md:text-8xl">LIFE</span>
              <span className="text-xl sm:text-2xl md:text-4xl">IS</span>
              <span className="text-4xl sm:text-5xl md:text-8xl">STRANGE</span>
            </h1>
            <h1 className="text-cyan-300 py-3 sm:py-5 md:py-10">Till now the best</h1>
            <h1 className="text-lg sm:text-xl">Reverse the TIME.</h1>
            <h1 className="py-2 sm:py-4 text-red-500 text-lg sm:text-xl">
              Who Will Survive?
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 py-5">
              <a href="https://youtu.be/AURVxvIZrmU?feature=shared">
                <div className="text-center border-4 border-red-600 hover:border-amber-300 w-48 sm:w-60 bg-white rounded-3xl hover:bg-cyan-300 transition-all">
                  <h1 className="py-2 text-black text-lg sm:text-xl">Watch Trailer</h1>
                </div>
              </a>
              <a href="">
                <div className="text-center border-4 border-amber-300 hover:border-red-600 w-48 sm:w-60 bg-white rounded-3xl hover:bg-cyan-300 transition-all">
                  <h1 className="py-2 text-black text-lg sm:text-xl">Learn More</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🟨 MEDIA SECTION */}
      <div className="bg-blue-900 text-white py-20 px-5 md:px-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-10">Media</h1>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-5">
          <div className="md:w-1/2 w-full relative">
            <img
              src={mediaImages[0]}
              alt="Main Media"
              onClick={() => setSelectedImage(mediaImages[0])}
              className="w-full h-[250px] sm:h-[400px] md:h-[600px] object-cover rounded-2xl cursor-pointer hover:opacity-90 transition-all"
            />
          </div>

          <div className="md:w-1/2 w-full grid grid-cols-2 gap-3 sm:gap-4">
            {mediaImages.slice(1, 5).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Media ${idx + 2}`}
                onClick={() => setSelectedImage(img)}
                className="w-full h-[120px] sm:h-[180px] md:h-[280px] object-cover rounded-xl cursor-pointer hover:opacity-80 transition-all"
              />
            ))}
          </div>
        </div>

        <div className="mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-red-600 text-white text-lg sm:text-xl rounded-2xl hover:bg-red-700 transition-all"
          >
            View All Media
          </button>
        </div>

        {/* 🔳 All Media Overlay */}
        {showAll && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex justify-center items-center overflow-y-auto py-10"
            onClick={() => setShowAll(false)}
          >
            <div
              className="flex flex-col items-center w-full max-w-5xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-0 right-0 mt-5 mr-8 text-4xl text-white hover:text-red-500 transition-all"
              >
                ✕
              </button>

              <h1 className="text-3xl sm:text-4xl mb-10 font-bold mt-10 text-white">
                All Media
              </h1>

              <div className="flex flex-col gap-8 w-full items-center">
                {mediaImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Full Media ${idx + 1}`}
                    onClick={() => setSelectedImage(img)}
                    className="w-[90%] sm:w-full max-w-4xl rounded-2xl cursor-pointer hover:opacity-90 transition-all"
                  />
                ))}
              </div>

              <div className="pb-20"></div>
            </div>
          </div>
        )}

        {/* 🖼️ Single Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[60]"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90%] max-h-[85%] rounded-2xl shadow-2xl border-4 border-white"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-8 text-4xl text-white hover:text-red-500"
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
    )
}

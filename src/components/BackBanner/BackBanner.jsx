import { useEffect, useState } from "react";

function BackBanner() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    // Calculating how many banners we will need to fully cover the screen
    const windowWidth = window.innerWidth;
    const bannerWidth = 97;

    const bannerCount = Math.floor(windowWidth / bannerWidth) + 1;

    // Setting the banners
    const banners = [];
    for (let i = 0; i < bannerCount; i++) {
      banners.push(
        <span
          className="text-black text-[40px] font-display font-bold w-[97px] h-[40px] bottom-4 absolute"
          style={{
            left: `${i * bannerWidth - bannerWidth / 4}px`,
            paddingLeft: `${i * 10}px`,
          }}
          key={`${i}_banner`}
        >
          Back
        </span>
      );
    }

    setBanners(banners);
  }, []);

  return (
    <div className="w-full h-[63px] bg-[#F1F7EB] relative overflow-hidden">
      {banners}
    </div>
  );
}

export default BackBanner;

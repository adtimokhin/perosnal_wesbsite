import { Link } from "react-router-dom";

function ExperiencePage() {
  return (
    <div className="w-screen h-screen bg-[#F1F7EB] relative">
      {/* Back button */}
      <Link className="text-[64px] font-display font-extralight absolute top-0 right-0 text-[#193001] hover:text-[#6DD200]" to="/">
        &#8592;Back
      </Link>

      {/* Cool rectangles */}
      <div className="bg-[#77A842] absolute w-full h-[244px] left-0 top-[346px]"/>
      <div className="bg-[#6DD200] absolute h-full w-[538px] left-[152px]"/>
     

      {/* Buttons */}
      <Link className="text-[#193001] font-light font-display text-[182px] z-10 absolute bottom-[40px] hover:text-[#F1F7EB] hover:bg-[#7F3549]" to="/skills/languages">
      Languages
      </Link>

      <button className="text-[#193001] font-light font-display text-[182px] z-10 absolute right-0 top-[200px] hover:text-[#F1F7EB] hover:bg-[#7F3549]">
      Tools
      </button>
    </div>
  );
}

export default ExperiencePage;

import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="bg-[#3B462F] w-screen h-screen">
      {/* Back button */}
      <Link
        className="text-[64px] font-display font-extralight absolute top-0 right-0 text-[#F1F7EB] hover:text-[#9DCC6A] z-10"
        to="/nav"
      >
        &#8592;Back
      </Link>

      <h2 className="text-[#F1F7EB] text-[96px] font-semibold font-display pt-8 pl-5">
        About Me
      </h2>
    </div>
  );
}

export default AboutPage;

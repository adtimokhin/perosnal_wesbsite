import ColorScheme from "../ColorScheme/ColorScheme";
import TextLink from "../TextLink/TextLink";

function Footer() {
  return (
    <footer className="bg-main-100 pt-5 selection:text-main-600">
      <div className="w-screen flex">
        <img
          src="personal_website_adtimokhin_logo.svg"
          className="w-[40%] ml-2 mt-[8%]"
          draggable="false"
        ></img>
        <div className="w-full static">
          <div className=" w-full" id="color_scheme-container">
            <h4 className="text-light font-extralight font-display text-3xl">
              Color Scheme
            </h4>
            <div className="h-[200px] w-full">
              <ColorScheme />
            </div>
          </div>

          <div className="w-full h-fit flex mt-5 pl-5">
            {/* Container for the message about the "LOGO" */}
            <div className="w-[70%] h-full relative items-center justify-center">
              <div className="text-center font-body font-thin text-light text-2xl w-[60%]">
                Just so you know, this is what goes to footer of every project
                that I do.
              </div>
            </div>

            {/* Container for the message about the "FONTS" */}
            <div className="w-[30%] h-full static pl-11">
              <h3 className="w-full text-left font-display font-medium text-2xl text-light mb-10">
                Fonts used:
              </h3>
              <h4 className="w-fit text-left font-display font-light text-xl text-light pl-10 mb-7">
                Inter
              </h4>
              <h4 className="w-fit text-left font-body font-normal text-xl text-light">
                Lexend
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-4 p-6 text-center">
        <p className="font-display font-extralight text-xl text-[#F5B45F]">
        © 2023 atimokhin 
        </p>
        <p className="">
          <TextLink link={"mailto:adtimokhin@gmail.com"}>Contact</TextLink>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

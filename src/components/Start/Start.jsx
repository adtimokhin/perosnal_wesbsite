import "./Start.css"

function Start() {
  return (
    <div className="relative h-screen w-full">
      <div className="w-screen h-screen bg-main-100 absolute top-0 left-0">
        {/* TOP ROW */}
        <div className="w-full h-[50%] flex overflow-hidden">
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/A.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full relative w-fit px-12 flex justify-center items-center letter-holder">
            <img
              src="src/assets/adtimokhin_letters/Rectangle 2.svg"
              className="bottom-3 absolute w-16"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/D.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full relative w-fit px-12 flex justify-center items-center letter-holder">
            <img
              src="src/assets/adtimokhin_letters/Rectangle 2.svg"
              className="bottom-3 absolute w-16"
              draggable="false"
            />
          </div>

          {/* <div className="h-full relative w-fit flex justify-center items-center">
              <img
                src="src/assets/adtimokhin_letters/-.svg"
                className="w-[131px]"
              />
            </div> */}
        </div>
        <div className="w-full h-[50%] flex justify-between">
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/T.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/I.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/M.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full letter-holder">
            <img
              src="src/assets/adtimokhin_letters/O.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/K.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/H.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/I.svg"
              className="h-full"
              draggable="false"
            />
          </div>
          <div className="h-full p-2 letter-holder">
            <img
              src="src/assets/adtimokhin_letters/N.svg"
              className="h-full"
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div className="bg-main-800 h-[200px] w-[200px] text-main-500 font-display font-bold text-3xl absolute top-11 right-20 text-center align-baseline" id="ui-ux-card">
        <p>UI/UX Design</p>
      </div>
    </div>
  );
}

export default Start;

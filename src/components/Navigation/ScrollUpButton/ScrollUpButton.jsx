import { useContext } from "react";
import MenuWindow from "../../Menu/MenuWindow/MenuWindow";
import "./ScrollUpButton.css";
import MyContext from "../../../utils/UseContext";

function ScrollUpButton({ startText, endText, contextFill, menuBackgroundColor }) {
  const setMenuWindow = useContext(MyContext);
  const addMenuWindow = function () {
    setMenuWindow({ show: true, context: contextFill, menuBackgroundColor: menuBackgroundColor });
  };
  // TODO: add support for anchoring to different elements on the page
  return (
    <div
      className="h-[36px] w-[200px] scrollup-button text-light relative font-display font-medium text-3xl hover:cursor-pointer"
      onClick={addMenuWindow}
    >
      <p className="top-0 absolute">{startText}</p>
      <p className="top-0 absolute">{endText}</p>
      <div className="w-[0px] h-[3px] bg-main-800 absolute bottom-0"></div>
    </div>
  );
}

export default ScrollUpButton;

import "./SocialMediaButton.css";

function SocialMediaButton({ iconSVG, iconID, iconBgID, buttonUrl }) {
  function hoverButton() {
    const iconBg = document.getElementById(iconBgID);
    const icon = document.getElementById(iconID);

    icon.className.baseVal = "icon active";
    iconBg.className.baseVal = "icon-bg active";
  }

  function unhoverButton() {
    const iconBg = document.getElementById(iconBgID);
    const icon = document.getElementById(iconID);

    icon.className.baseVal = "icon";
    iconBg.className.baseVal = "icon-bg";
  }

  function buttonCLicked(){
    window.open(buttonUrl, "_blank");
  }

  return (
    <div
      className="bg-main-250 text-dark bg-transparent hover:cursor-pointer group w-[120px] h-[120px]"
      onMouseEnter={() => hoverButton()}
      onMouseLeave={() => unhoverButton()}
      onClick={() => buttonCLicked()}
    >
      {iconSVG}
    </div>
  );
}

export default SocialMediaButton;

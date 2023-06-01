import ColorBox from "./ColorBox/ColorBox";

function ColorScheme() {
  return (
    <div className="flex h-full w-full">
      <ColorBox colorVal={"#170D00"} textColor={"#ffebd1"}/>
      <ColorBox colorVal={"#4C2B00"} textColor={"#ffebd1"}/>
      <ColorBox colorVal={"#BB6B00"} textColor={"#170D00"}/>
      <ColorBox colorVal={"#D97B00"} textColor={"#170D00"}/>
      <ColorBox colorVal={"#EB8500"} textColor={"#170D00"}/>
      <ColorBox colorVal={"#FF9100"} textColor={"#170D00"}/>
      <ColorBox colorVal={"#F5B45F"} textColor={"#170D00"}/>
      <ColorBox colorVal={"#ffebd1"} textColor={"#170D00"}/>
    </div>
  );
}

export default ColorScheme;

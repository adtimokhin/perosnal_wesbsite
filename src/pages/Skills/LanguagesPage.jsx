import { Link } from "react-router-dom";
import LetterLine from "../../components/LetterLine/LetterLine";
import BackBanner from "../../components/BackBanner/BackBanner";
import { useEffect, useState } from "react";

function LanguagesPage() {
  const [lines, setLines] = useState([]);
  useEffect(() => {
    import("../../data/languagesLines.json")
      .then(({ lines }) => {
        // Set the lines data.
        setLines(lines);
      })
      .catch((err) => {
        console.error("Failed to load projects data: ", err);
      });
  }, []);

  return (
    <div className="w-screen h-screen bg-[#9DCC6A]">
      {/* Back banner */}
      <Link to="/skills">
        <BackBanner leftToRight={true} />
      </Link>

      {/* Lines with text */}
      <div
        className="w-full overflow-hidden justify-between"
        style={{ height: `${window.innerHeight - 2 * 63}px` }}
        // 63 - height of the banner
      >
        {lines.map(line =>(
            <LetterLine letters={line.letters} focusLetters={line.focusLetters}/>
        ))}
      </div>

      <Link to="/skills">
        <BackBanner leftToRight={false} />
      </Link>

      {/* <LetterLine letters={"UPBLSSQUQRJLVSVEFPLJAWGACSSFDOUURL"} /> */}
      {/* <LetterLine letters={"FAEYRYZFTYWVCCBJGLIXYRTUYQKFFPBMJT"} /> */}
    </div>
  );
}

export default LanguagesPage;

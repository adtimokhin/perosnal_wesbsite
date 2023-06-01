import { Link } from "react-router-dom";
import LetterLine from "../../components/LetterLine/LetterLine";
import BackBanner from "../../components/BackBanner/BackBanner";

function LanguagesPage() {
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
        {/* FIXME: Change the h-full to the real value later */}
        <LetterLine letters={"YXGFTUXJAVAKYVCKQCLHDMZMPGLFEV"} />
        <LetterLine letters={"AABKHQCSWIULMNCRSUVWCOSBGBZOQL"} />
        <LetterLine letters={"DHYCCSTDHPQJKJSRDSMURNVDBTMJPT"} />
        <LetterLine letters={"OCNYUBREHFTCYAOEOFPFGKGJODXNJEJI"} />
        <LetterLine letters={"BFOGPJDGHBHOGYVSRJYJDGKIGBNSZBY"} />
        <LetterLine letters={"EADTIMOKHINFQFNQBIPYTHONPHXGSKIOL"} />
        <LetterLine letters={"RCOGMFIOGSQARSYJODQJGZDIFEOREODF"} />
        <LetterLine letters={"SHMWYTNOUTXJLVWPGDQPWCLYGIBROA"} />
        <LetterLine letters={"TJOIKMIESQLIWZLKPGMRBURRITOFMLDMB"} />
        <LetterLine letters={"YNIGWERDIDVHFVMGMKQNJAYHDFZAAIA"} />
        <LetterLine letters={"CUMOWUHBRHGGRPSWIFTTISXSTWFUKBQ"} />
        <LetterLine letters={"XBSHTMLBPBJVEPJTKDRSPPGLCSSRVQAZ"} />
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

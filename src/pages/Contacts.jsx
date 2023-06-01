import ContactButtons from "../components/ContactButtons/ContactButtons";

function Contacts() {
  return (
    <div className="h-screen w-screen bg-[#F1F7EB] relative">
      {/* Back button */}
      <button className="text-[64px] font-display font-extralight absolute top-0 right-0 text-[#F1F7EB] hover:text-[#3B462F] z-10">
        &#8592;Back
      </button>

      {/* Cool rectangles */}
      <div className="bg-[#193001] w-[54%] absolute h-[60%] bottom-0" />
      <div className="bg-[#77A842] w-[53.45%] absolute h-[58%] top-0 right-0" />
      {/*  Contacts text */}

      <h2
        className="text-[#F1F7EB] text-[96px] font-display font-bold absolute top-1/2 left-1/2"
        style={{ transform: "translate(-50%, -50%)" }}
      >
        CONTACTS
      </h2>

      {/* Contact Buttons */}
      <div className="w-[44%] absolute bottom-3 left-1/2"
      style={{ transform: "translate(-50%, 0)" }}>
        <ContactButtons />
      </div>
    </div>
  );
}

export default Contacts;

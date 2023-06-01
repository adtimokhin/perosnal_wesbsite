import ContactButtons from "../ContactButtons/ContactButtons";
import TextLink from "../TextLink/TextLink";

function ContactForm() {
  return (
    <div className="w-[80%] h-fit p-10 bg-main-700 rounded-xl relative">
      {/* <div className="w-[80%] h-[42px] bg-main-500 absolute -top-2"></div> */}

        <div className="mb-40 relative">
          {/* <div className="absolute"></div> */}
          <h2 className="font-display font-black text-[170px] text-light relative">
            <span className="absolute top-2 -left-2 text-dark text-[180px]">
              Contacts
            </span>
            Contacts
          </h2>

          <div className="w-full h-[42px] bg-main-500 absolute left-[100px] -rotate-1"></div>
        </div>

      {/* Message containers */}
      <div className="w-fit h-fit mb-24" id="freelancers-offers-container">
        <h3 className="font-display font-extrabold text-4xl text-dark pb-5">
          For freelance opportunities:
        </h3>
        <p className="font-body font-normal text-xl text-main-200 pl-5 pr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          cupiditate ex quod, vitae maiores corporis asperiores nemo ratione
          voluptas voluptate
          <TextLink
            link={
              "https://realtimecolors.com/?colors=000000-ffffff-4685ff-f2f2f2-ffb084"
            }
          >
            incidunt
          </TextLink>
          distinctio maxime delectus omnis cumque minima. Quod cum illum, vero
          maiores voluptas odit, eius incidunt voluptates, quidem numquam
          voluptatibus?
        </p>
      </div>

      <div className="w-fit h-fit mb-24" id="job-offers-container">
        <h3 className="font-display font-extrabold text-4xl text-dark pb-5">
          For job offerers:
        </h3>
        <p className="font-body font-normal text-xl text-main-200 pl-5 pr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          cupiditate ex quod, vitae maiores corporis asperiores nemo ratione
          voluptas voluptate incidunt distinctio maxime delectus omnis cumque
          minima. Quod cum illum, vero maiores voluptas odit, eius incidunt
          voluptates, quidem numquam voluptatibus?
        </p>
      </div>

      <div className="w-fit h-fit mb-10" id="collab-offers-container">
        <h3 className="font-display font-extrabold text-4xl text-dark pb-5">
          For fellow coders:
        </h3>
        <p className="font-body font-normal text-xl text-main-200 pl-5 pr-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          cupiditate ex quod, vitae maiores corporis asperiores nemo ratione
          voluptas voluptate incidunt distinctio maxime delectus omnis cumque
          minima. Quod cum illum, vero maiores voluptas odit, eius incidunt
          voluptates, quidem numquam voluptatibus?
        </p>
      </div>

      <div
        className="w-full h-fit flex flex-col justify-center items-center m-4"
        id="contact-buttons-center-container"
      >
        <div className="w-[40%]">
          <ContactButtons />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;

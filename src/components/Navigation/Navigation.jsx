import Experience from "../Menu/MenuContent/Experience/Experience";
import Projects from "../Menu/MenuContent/Projects/Projects";
import "./Navigation.css";
import ScrollUpButton from "./ScrollUpButton/ScrollUpButton";
import { useEffect, useRef } from "react";

function Navigation() {
  const navRef = useRef();
  const originalNavPosition = useRef();

  useEffect(() => {
    originalNavPosition.current =
      navRef.current.getBoundingClientRect().top + window.scrollY;

    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition >= originalNavPosition.current) {
        navRef.current.classList.add("sticky");
      } else {
        navRef.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 w-full h-[100px] bg-main-100 z-40 flex items-center pl-8"
    >
      <ScrollUpButton
        startText={"Experience"}
        endText={"Experience"}
        contextFill={<Experience />}
        menuBackgroundColor={"#F000FF"}
      />
      <ScrollUpButton
        startText={"Projects"}
        endText={"Projects"}
        contextFill={<Projects />}
        menuBackgroundColor={"#F33300"}
      />
      <ScrollUpButton
        startText={"Contacts"}
        endText={"Contacts"}
        contextFill={<p>Nothing here for now</p>}
        menuBackgroundColor={"#350112"}
      />
    </nav>
  );
}

export default Navigation;

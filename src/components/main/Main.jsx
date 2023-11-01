// import { useContext } from "react";
// import CurrentUserContext from "../../contexts/CurrentUserContext";
import Promo from "../Promo/Promo";
import AboutProject from '../AboutProject/AboutProject';
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";

export default function Main() {
  return (
    <main className="content">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

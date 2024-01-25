import { Fragment } from "react";
import Header from "./Layout/Header";
import MainModiiamge from "./component/Home/MainModiiamge";
import ProblemStatment from "./component/Home/ProblemStatment";
import OurAction from "./component/Home/OurAction";
import Benifeits from "./component/Home/Benifeits";
import Yoga from "./component/Home/Yoga";
import Astep from "./component/Home/Astep";
import Navrathri from "./component/Home/Navrathri";
import InspirationHeading from "./component/Home/InspirationHeading";
import InsriredCard from "./component/Home/InsriredCard";
import Footer from "./Layout/Footer";


function App() {
  return (
    <Fragment>

      <MainModiiamge />
      <ProblemStatment />
      <OurAction />
      <Benifeits />
      <Yoga />
      <Astep />
      <Navrathri />
      <InspirationHeading />
      <InsriredCard />

    </Fragment>
  );
}

export default App;

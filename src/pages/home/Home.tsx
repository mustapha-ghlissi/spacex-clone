import React, { memo } from "react";
import Main from "pages/common/Main";
import Slide, { SlideType } from "./components/Slide";

const SLIDES: Array<SlideType> = [
  {
    id: 1,
    title: "crew-8 mission",
    subTitle: "upcoming launch",
    action: "watch",
    image: require("../../assets/images/spacex-1.jpg"),
  },
  {
    id: 2,
    title: "starlink mission",
    subTitle: "recent launch",
    action: "rewatch",
    image: require("../../assets/images/spacex-1.jpg"),
  },
  {
    id: 3,
    title: "telkomsat merah putih 2 mission",
    subTitle: "recent launch",
    action: "rewatch",
    image: require("../../assets/images/spacex-1.jpg"),
  },
  {
    id: 4,
    title: "intuitive machines im-1 mission ",
    subTitle: "recent launch",
    action: "rewatch",
    image: require("../../assets/images/spacex-1.jpg"),
  },
  {
    id: 5,
    title: "startship's second flight test",
    subTitle: "recent launch",
    action: "rewatch",
    image: require("../../assets/images/spacex-1.jpg"),
  },
];

const Home = memo(function Home() {
  return (
    <Main>
      {SLIDES.map((slide: SlideType, index: number) => (
        <Slide key={index} slide={slide} />
      ))}
    </Main>
  );
});

export default Home;

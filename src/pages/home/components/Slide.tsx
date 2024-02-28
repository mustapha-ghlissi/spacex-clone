import React, { PropsWithChildren, memo } from "react";
import { Link } from "react-router-dom";

export type SlideType = {
  id: number;
  title: string;
  subTitle: string;
  action: string;
  image?: any;
};

type SlideProps = PropsWithChildren & {
  slide: SlideType;
};

const Slide = memo(function Slide(props: SlideProps) {
  return (
    <div className={`home-slide home-slide-${props.slide.id}`}>
      <div className="d-flex home-slide__overlay">
        <div className="home-slide__content">
          <p className="home-slide__subtitle">{props.slide.subTitle}</p>
          <h2 className="home-slide__title">{props.slide.title}</h2>
          <Link to={"/"} className="home-slide__action text-decoration-none">
            {props.slide.action}
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Slide;

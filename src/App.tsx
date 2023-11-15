import { MouseEventHandler, MouseEvent } from "react";
import "./App.scss";
import tanya from "./assets/images/image-tanya.jpg";
import john from "./assets/images/image-john.jpg";

import Arrow from "./components/Arrow";

const data = [
  {
    image: tanya,
    name: "Tanya Sinclair",
    title: "UX Engineer",
    testimony:
      "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
  },
  {
    image: john,
    name: "John Tarkpor",
    title: "Junior Front-end Developer",
    testimony:
      "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
  },
];

function App() {
  const arrowHandler: MouseEventHandler = (e: MouseEvent<HTMLImageElement>) => {
    const element = e.currentTarget;
    const className = element.className;
    if (className.includes("disabled")) {
      return;
    }

    const disabledClass = "arrow__button--disabled";
    const anotherElement = element.parentElement?.getElementsByClassName(
      disabledClass
    )[0] as HTMLImageElement;
    anotherElement.className = "arrow__button";
    element.className = disabledClass;

    const slider = document.getElementsByClassName("slider");
    switch (slider[0].className) {
    case "slider":
      slider[0].className = "slider move";
      break;
    default:
      slider[0].className = "slider";
      break;
    }
  };

  return (
    <main>
      <div className="slider">
        {data.map((testimonial) => (
          <section className="slider__testimonial" key={testimonial.name}>
            <div className="slider__testimonial__image">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                loading="lazy"
              ></img>
            </div>
            <div className="slider__testimonial__testimony">
              <p className="slider__testimonial__testimony__p">{testimonial.testimony}</p>
              <hgroup>
                <h1>{testimonial.name}</h1>
                <p>{testimonial.title}</p>
              </hgroup>
            </div>
          </section>
        ))}
      </div>
      <Arrow handler={arrowHandler}></Arrow>
    </main>
  );
}

export default App;

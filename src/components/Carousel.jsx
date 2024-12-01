import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import image from "./frontend.png";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="Our Beloved React" image={image} />
        <Carousel.Caption>
          <p>Think in React</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="React's Wingman Tailwind" image={image} />
        <Carousel.Caption>
          <h3>Tailwind CSS: Style with Ease</h3>
          <p>
            Simplify your CSS workflow and build stunning, responsive designs
            effortlessly.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="AngularJS" image={image} />
        <Carousel.Caption>
          <h3>AngularJS: The Enterprise Choice</h3>
          <p>
            More than a library, less than a framework — AngularJS combines the
            power of TypeScript to build robust and scalable UIs.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Vue.js" image={image} />
        <Carousel.Caption>
          <h3>test </h3>
          <p>
            You hit npm create vite@latest ./ --template vue and your code is
            ready for production
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;

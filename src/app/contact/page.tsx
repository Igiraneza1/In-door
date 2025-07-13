import Intro from "./intro/page";
import About from "./about/page";
import Form from "./form/page";
import Icon from "./icon/page";

export default function ContactPage() {
  return (
    <div className="bg-white mt-13 ">
      <div className=" mx-auto max-w-8xl">
        <Intro />
        <About />
        <Form />
        <Icon />
        
      </div>
    </div>
  );
}

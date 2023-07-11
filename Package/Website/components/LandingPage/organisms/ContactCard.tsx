import { button, text, title } from "data/LandingPage/ContactCard.data";
import { Button } from "../atoms";

function Contact() {
  return (
    <section className="flex justify-center">
      <div className="flex w-10/12 flex-col items-center justify-evenly rounded-xl bg-primary/90 py-6 shadow-2xl backdrop-blur-xl md:flex-row">
        <h2 className="text-shadow text-center text-2xl font-bold text-white">
          {title}
        </h2>
        <p className="text-shadow max-w-prose py-8 text-center font-semibold text-white sm:py-0">
          {text}
        </p>
        <Button
          text={button}
          href="/contact"
          className="border border-secondary bg-transparent text-secondary duration-300 hover:bg-secondary hover:text-white md:w-fit md:p-4"
        />
      </div>
    </section>
  );
}

export default Contact;

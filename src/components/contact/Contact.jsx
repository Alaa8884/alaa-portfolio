import emailjs from 'emailjs-com';
import Lottie from 'lottie-react';
import SectionHeading from '../ui/SectionHeading';
import contact from '../../assets/contact_animation/Contact.json';

import {
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiPhoneFill,
  RiWhatsappFill,
} from '@remixicon/react';
import Button from '../ui/Button';

function Contact() {

function handleSendEmail(e) {
  e.preventDefault(); 
  emailjs
    .sendForm(
      'service_ltsehel',
      'template_1v0990b',
      e.target,
      '98rJSYQDr1YvEqLPXQjnd',
    )
    .then(
      // eslint-disable-next-line no-unused-vars
      (result) => {
        window.location.reload();
      },
      (error) => {
        console.log(error.text);
      },
    );
}


  return (
    <section
      className="contact-section relative mt-5 w-full overflow-hidden bg-stone-950/30 px-6 pb-3 pt-9 backdrop-blur-lg"
      id="contact"
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="mx-auto mb-16 max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 ml-1 md:mb-0 md:w-1/2">
            <h2 className="mb-3 text-3xl font-bold text-purple-500">
              Get in Touch
            </h2>
            <p className="mb-4 text-white/85">
              I&apos;m always open to new opportunities and collaboration. Feel
              free to reach out!
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/alaa-mohammed-youssef-9b9268220/"
                className="text-[#0a66c2]"
              >
                <RiLinkedinBoxFill />
              </a>
              <a
                href="https://www.linkedin.com/in/alaa-mohammed-youssef-9b9268220/"
                className="text-[#25d366]"
              >
                <RiWhatsappFill />
              </a>
              <a href="tel:+201019365451" className="text-[#06f55e]">
                <RiPhoneFill />
              </a>
            </div>
            <Lottie
              animationData={contact}
              className="mx-auto w-[300px] md:h-[350px] md:w-[350px] lg:h-[500px] lg:w-[500px]"
            />
          </div>
          <form
            className="w-full rounded-lg border border-purple-500 p-6 shadow-lg shadow-purple-500 md:w-1/2"
            onSubmit={handleSendEmail}
          >
            <h1 className="mb-7 text-4xl font-bold">Contact Me</h1>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="mx-auto mt-2 block w-full rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="mx-auto mt-2 block w-full rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter Your Message"
                className="focus:ring-opacity- mx-auto mt-2 block h-32 w-full resize-none rounded-md border-purple-500 p-2 text-stone-800 shadow-sm outline-none focus:border-purple-600 focus:ring focus:ring-purple-500"
              />
            </div>

            <Button btnAnimated="primary">
              Send Message <RiMailSendFill className="ml-3" size={20} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

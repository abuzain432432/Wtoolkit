"use client";
import React from "react";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can send the form data to a server or handle it as needed
    console.log("Form submitted:", { name, email, subject, message });
    // Clear the form fields after submission
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="max-w-4xl mx-auto lg:px-0 mt-16">
      <div className=" p-4">
        <h1 className="text-4xl font-bold text-center my-6 text-emerald-700">
          Contact Us
        </h1>
        <p className="text-center mb-6 text-gray-600 ">
          Have an inquiry or feedback for us? Fill out the form below and one of
          our experts will get back to you as soon as possible.
        </p>
        <hr className="h-0.5 mx-auto my-4 bg-emerald-500 border-0 rounded md:my-10 dark:bg-gray-700" />
        {/* <div className="flex justify-around "> */}
        <div className="bg-emerald-200 px-8 py-8 rounded-2xl w-1/2 m-auto">
          <h2 className="font-bold text-xl text-gray-700">Send us a message</h2>
          <hr className="h-0.5 mx-auto  bg-emerald-500 border-0 rounded md:my-10 dark:bg-gray-700" />

          <form onSubmit={handleSubmit} className="max-w-sm  mt-6">
            <div className="my-8">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="my-8">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="my-8">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-600"
              >
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="my-8">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 p-8 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-emerald-600 text-white px-4 py-2 w-full rounded-full hover:bg-emerald-900"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <div className="w-1/2  mx-4 text-sm">
            <p>
              Do you have questions about PR, media, events and cooperation?
              Send an e-mail to Marketing Director in På(fill), Lene Ljødal:
            </p>
            <div className="flex my-6 items-center cursor-pointer">
              <p className="mx-5">
                <Image
                  src="/images/email.png"
                  alt="hero image"
                  width={30}
                  height={30}
                />
              </p>
              <p className="underline">watoolkithelp@gmail.com</p>
            </div>
            <hr className="h-0.5 mx-auto my-4 bg-emerald-500 border-0 rounded md:my-10 dark:bg-gray-700" />

            <p>
              Do you have questions about PR, media, events and cooperation?
              Send an e-mail to Marketing Director in På(fill), Lene Ljødal:
            </p>
            <div className="flex my-6 items-center cursor-pointer">
              <p className="mx-5">
                <Image
                  src="/images/email.png"
                  alt="hero image"
                  width={30}
                  height={30}
                />
              </p>
              <p className="underline">watoolkit@gmail.com</p>
            </div>
          </div> */}
      </div>
      <hr className="h-0.5 mx-auto my-3 bg-emerald-500 border-0 rounded md:my-10 dark:bg-gray-700" />
      <div className="items-center">
        <p className="text-center text-gray-600">Follow us on social media</p>
        <div className="text-center mt-2">
          <span className="inline-flex">
            <a className="text-gray-500 hover:text-emerald-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-emerald-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-emerald-600 cursor-pointer">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-4 text-gray-500 hover:text-emerald-600 cursor-pointer">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
          {/* <ul className="">
            <li className="">
              <span>
                <Image
                  src="/images/instagram.png"
                  alt="hero image"
                  className="shadow inline"
                  width={30}
                  height={30}
                />
              </span>
              <span>
                <Image
                  src="/images/linkedin.png"
                  alt="hero image"
                  className="shadow inline"
                  width={30}
                  height={30}
                />
              </span>
              <span>
                <Image
                  src="/images/facebook.png"
                  alt="hero image"
                  className="shadow inline"
                  width={30}
                  height={30}
                />
              </span>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ContactPage;

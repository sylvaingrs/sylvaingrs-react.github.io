import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className=" lg:py-13 md-pl-2 xl-pl-16 bg-gray-200 py-6 pl-8 dark:bg-gray-900 md:px-14 md:py-12 lg:py-14 xl:py-2 2xl:pl-28">
        <h2 className="mb-1 text-xl font-semibold tracking-tight text-gray-400 md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Get in touch
        </h2>

        <p class="mx-auto text-xl text-gray-700 dark:text-gray-400">
          Track work across the enterprise through an open, collaborative
          platform.
        </p>

        <form
          class="mx-auto max-w-sm "
          action="https://formspree.io/f/mayrqrzk"
          method="POST"
        >
          <div class="mb-5">
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your email"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              message
            </label>
            <textarea
              placeholder="your message"
              required
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </section>
      <section className="dark: bg-gray-200 bg-gray-900 pb-64"></section>
    </>
  );
};

export default Contact;

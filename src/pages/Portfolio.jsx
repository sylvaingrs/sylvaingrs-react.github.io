import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      <section className="lg:py-13 md-pl-2 xl-pl-16 xl:py-22 bg-gray-300 py-6 pl-8 dark:bg-gray-900 md:px-14 md:py-12 lg:py-14 2xl:pl-28">
        <h2 className="text-blac mb-1 text-3xl font-semibold tracking-tight dark:text-gray-200 md:mb-4 md:max-w-2xl md:text-5xl lg:mb-6 lg:max-w-3xl lg:text-5xl xl:text-6xl 2xl:text-6xl">
          Projects
        </h2>
        <p
          className="text-lg leading-relaxed text-black dark:text-gray-300 md:max-w-2xl
        md:text-2xl md:leading-relaxed lg:max-w-3xl lg:text-2xl lg:leading-relaxed xl:max-w-4xl xl:text-3xl
        xl:leading-relaxed 2xl:max-w-4xl 2xl:text-3xl 2xl:leading-relaxed"
        >
          This is my website projects
        </p>
      </section>
      <section className="bg-gray-200 dark:bg-gray-800">
        <div class="ml-12 mr-0 grid grid-cols-3 grid-rows-2 gap-5">
          <div className="items-center">
            <a href="src/portfolio/fashion/index.html" className="items-center">
              <img
                src="public/images/project-fashion.jpg"
                alt="Fashion web page project"
                className="rounded-md border-2"
              />
              <h3 className=" text-gray-100">Fashion Project</h3>
            </a>
          </div>

          <div>
            <a href="src/portfolio/smoothies/index.html">
              <img
                src="public/images/project-smoothie.jpg"
                alt="Smoothie web page project"
                className="rounded-md border-2"
              />
              <h3 className=" text-gray-100">Smooth Smoothies</h3>
            </a>
          </div>

          <div>
            <a href="src/portfolio/crypto-wallet/index.html">
              <img
                src="public/images/project-crypto-wallet.jpg"
                alt="Crypto wallet web page project"
                className="rounded-md border-2"
              />
              <h3 className=" text-gray-100">Crypto Wallet</h3>
            </a>
          </div>
          <div>
            <a href="src/portfolio/project-hero/index-1.html">
              <img
                src="public/images/project-hero.png"
                alt="Hero blocks web page project"
                className="rounded-md border-2"
              />
            </a>
            <h3 className=" text-gray-100">Project Hero</h3>
          </div>
          <div>
            <a href="src/portfolio/project-multi-column/index.html">
              <img
                src="public/images/project-multi-col.png"
                alt="Multi-column web page project"
                className="rounded-md border-2"
              />
            </a>
            <h3 className=" text-gray-100">Multi Column</h3>
          </div>
          <div>
            <a href="src/portfolio/store/index.html">
              <img
                src="public/images/store.png"
                alt="Amazon affiliate web page project"
                className="rounded-md border-2"
              />
            </a>
            <h3 className=" text-gray-100">Store</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

const FooterApp = () => {
  return (
    <Footer className="bg-gray-400 dark:bg-gray-700">
      <div>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand>
              <Link to="/">
                <img
                  src="../public/images/website-logo-sample.png"
                  className="mr-3 h-6 sm:h-9"
                  alt="Sample website logo"
                />
              </Link>
            </Footer.Brand>
            <Footer.LinkGroup className="text-center">
              <Footer.Link href="#">home</Footer.Link>
              <Footer.Link href="portfolio">
                <Link to="portfolio">Portfolio</Link>
              </Footer.Link>
              <Footer.Link href="contact">
                <Link to="contact">Contact</Link>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.LinkGroup className=" text-center">
            <Footer.Link href="https://github.com/sylvaingrs/sylvaingrs-react.github.io">
              Github
            </Footer.Link>
            <Footer.Link href="https://www.linkedin.com/in/sylvain-gross-602b73292/">
              LinkedIn
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
      </div>
    </Footer>
  );
};

export default FooterApp;

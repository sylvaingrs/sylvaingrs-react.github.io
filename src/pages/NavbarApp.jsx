import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import Contact from "./Contact";

function NavbarApp() {
  return (
    <Navbar container fluid className=" bg-gray-400 dark:bg-gray-700">
      <Navbar.Brand href="#">
        <img
          src="public/images/house.png"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <DarkThemeToggle />

        <Button>
          <Link to="/contact">Contact</Link>
        </Button>

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link>
          <Link to="../">Home</Link>
        </Navbar.Link>

        <Navbar.Link>
          <Link to="/portfolio">Portfolio</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarApp;

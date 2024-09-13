import { Link } from "react-router-dom";

import BrandLogoIcon from "../assets/brand-logo.svg";

function Header() {
  return (
    <header className="">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={BrandLogoIcon} alt="" />
        </Link>
      </nav>
    </header>
  );
}

export default Header;

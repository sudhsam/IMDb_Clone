import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Link } from "next/link";

const Header = () => {
  return;
  <div className="flex items-center justify-between py-6 mx-2 max w-6x1 sm:mx-auto">
    <div className="className">
      <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
    </div>
    <div className="className">
      <Link href="/">
        <h2 className="text-2x1">
          <span className="px-2 py-1 mr-1 font-bold rounded-lg bg-amber-500">
            IMDb{" "}
          </span>
          <span className="hidden text-xl sm:inline">Clone</span>
        </h2>
      </Link>
    </div>
  </div>;
};

export default Header;

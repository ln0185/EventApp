import { Link } from "react-router";
import HomeIcon from "../../assets/resources/home.svg";
import SearchIcon from "../../assets/resources/search.svg";
import EventIcon from "../../assets/resources/addEvent.svg";
import UserIcon from "../../assets/resources/user.svg";

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="w-full bg-sagnir-100 fixed bottom-0 border-t border-s-sagnir-200">
        <ul className="flex justify-around items-center py-4">
          {/* Home Icon */}
          <li onClick={() => "Home"}>
            <Link to="/home">
              <img src={HomeIcon} alt="HomePage" className="h-7 w-7" />
            </Link>
          </li>

          {/* Search Icon */}
          <li>
            <img
              src={SearchIcon}
              alt="Search"
              className="h-6 w-6 cursor-pointer"
            />
          </li>

          {/* Event Icon */}
          <li onClick={() => "CreateEventPage"}>
            <Link to="/CreateEvent">
              <img src={EventIcon} alt="CreateEventPage" className="h-6 w-6" />
            </Link>
          </li>

          {/* Quiz Icon */}
          <li onClick={() => "ProfilePage"}>
            <Link to="/profile">
              <img src={UserIcon} alt="Profilepage" className="h-7 w-7" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

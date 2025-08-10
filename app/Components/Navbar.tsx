import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="relvative">
      <Link
        to="/auth"
        className="absolute top-2 right-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full flex items-center justify-center w-[90px] h-[50px]"
      >
        Logout
      </Link>
      <nav className="navbar">
        <Link to="/">
          <p className="text-2xl font-bold text-gradient">Upload Resumes</p>
        </Link>
        <Link to="/upload" className="primary-button w-fit">
          Upload
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

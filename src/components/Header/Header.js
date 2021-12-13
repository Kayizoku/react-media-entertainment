import "./Header.css";
import "../../../src/App";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      🎥 Media Entertainment 🎥{" "}
    </span>
  );
};

export default Header;

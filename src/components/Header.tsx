import { useEdisonContext } from "@/context/EdisonContext";
import logoImg from "../images/logo.png";

function Header() {
  const { isOpen } = useEdisonContext();

  return (
    <header
      className="header"
      style={isOpen ? { zIndex: -1, display: "none" } : {}}
    >
      <div className="container">
        <div className="header-inner">
          <a href="/" className="logo">
            <img src={logoImg} alt="edison-logo" />
            <div className="title-box">
              <h1 id="title">Edison</h1>
              <span>Restaurant Nukus</span>
            </div>
          </a>
          {/* <button className="feedbackBtn" onClick={toggleModal}>
            Оставить отзыв
          </button> */}
        </div>
      </div>
    </header>
  );
}

export default Header;

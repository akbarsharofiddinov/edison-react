import {
  Banner,
  Cart,
  Categories,
  Footer,
  Header,
  Products,
  SearchInput,
} from "@/components";
import { useEdisonContext } from "@/context/EdisonContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { isOpen } = useEdisonContext();

  function checkTheChatID() {
    const navigate = useNavigate();
    let tg = Telegram.WebApp;

    if (tg.initDataUnsafe.user?.id === undefined) {
      navigate("/error");
    }
  }

  useEffect(() => checkTheChatID(), []);

  return (
    <section className="section-home">
      <div className="container">
        <div
          className="home-inner"
          style={isOpen ? { display: "none" } : { display: "block" }}
        >
          <Header />
          <Banner />
          <SearchInput />
          <Categories />
          <Products />
          <Footer />
        </div>
        {/* <FeedbackModal /> */}
        <Cart isOpen={isOpen} />
      </div>
    </section>
  );
}

export default Home;

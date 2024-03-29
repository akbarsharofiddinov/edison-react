import { Banner, Cart, Categories, Footer, Header, Products, SearchInput } from "@/components";
import { useEdisonContext } from "@/context/EdisonContext";

function Home() {
  const { isOpen } = useEdisonContext();
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

        <Cart isOpen={isOpen} />
      </div>
    </section>
  );
}

export default Home;

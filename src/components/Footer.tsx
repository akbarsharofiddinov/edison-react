import { useEdisonContext } from "@/context/EdisonContext";

function Footer() {
  const { openCart, products, cartProducts } = useEdisonContext();

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="totalPrice">
            <h1>Общая сумма</h1>
            <p style={{ display: "flex", gap: 5 }}>
              {cartProducts.reduce((total, cartItem) => {
                const item = products?.find((i) => i.id === cartItem.id);
                return (
                  total +
                  (Number.parseInt(item?.price!) || 0) * cartItem.quantity
                );
              }, 0)}
              <span>сум</span>
            </p>
          </div>
          <button className="order-btn" onClick={openCart}>
            Заказать
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import { ReactNode, createContext, useContext, useState } from "react";

type EdisonContextProviderProps = {
  children: ReactNode;
};

type EdisonContextType = {
  getProductQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartProducts: CartProduct[];
  cartQuantity: number;
  openCart: () => void;
  closeCart: () => void;
  products: IProduct[] | undefined;
  setProduct: (data: IProduct[]) => void;
  totalSumm: number;
  isOpen: boolean;
  modal: boolean;
  toggleModal: () => void;
};

// ============================================================

// context
const EdisonContext = createContext({} as EdisonContextType);

// hook
export function useEdisonContext() {
  return useContext(EdisonContext);
}

// ===========================================================

export function EdisonContextProvider({
  children,
}: EdisonContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [products, setProducts] = useState<IProduct[] | undefined>();
  const [totalSumm, setTotalSumm] = useState(0);

  const cartQuantity = cartProducts.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getProductQuantity(id: number) {
    return cartProducts.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setTotalSumm((prev) => {
      const findProduct = products?.find((item) => item.id === id);
      return (prev += Number.parseInt(findProduct?.price!));
    });
    setCartProducts((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setTotalSumm((prev) => {
      const findProduct = products?.find((item) => item.id === id);
      return (prev -= Number.parseInt(findProduct?.price!));
    });
    setCartProducts((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    setCartProducts((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  function setProduct(data: IProduct[]) {
    setProducts([...data]);
  }

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleModal = () => setModal((prev) => !prev);

  return (
    <>
      <EdisonContext.Provider
        value={{
          getProductQuantity,
          increaseCartQuantity,
          decreaseCartQuantity,
          removeFromCart,
          cartProducts,
          cartQuantity,
          openCart,
          closeCart,
          products,
          setProduct,
          totalSumm,
          isOpen,
          modal,
          toggleModal,
        }}
      >
        {children}
      </EdisonContext.Provider>
    </>
  );
}

import axios from "axios";
import React, { useEffect } from "react";
import ProductItem from "./ProductItem";
import { baseURL } from "@/API";
import { useEdisonContext } from "@/context/EdisonContext";
import { useMyParams } from "@/hooks/useMyParams";
import { PulseLoader } from "react-spinners";

const Products: React.FC = () => {
  const { products, setProduct } = useEdisonContext();
  const params = useMyParams();

  async function getProducts() {
    try {
      if (params) {
        const response = await axios.get(
          `${baseURL}/api/products?category_id=${params}`
        );
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      } else {
        const response = await axios.get(`${baseURL}/api/products`);
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, [params]);

  if (products?.length) {
    return (
      <>
        <section className="section-products">
          <div className="container">
            <div className="foods">
              {products.map((item, index) => (
                <ProductItem key={`${item.name}-${index}`} productData={item} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  } else {
    return (
      <section className="section-products">
        <div
          className="container"
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            marginTop: 150,
          }}
        >
          <PulseLoader color="#fbc100" />
        </div>
      </section>
    );
  }
};

export default Products;

import { baseURL } from "@/API";
import { useEdisonContext } from "@/context/EdisonContext";
import { useDebounce } from "@/hooks/useDebounce";
import { useMyParams } from "@/hooks/useMyParams";
import axios from "axios";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

function SearchInput() {
  const [inputVal, setInputVal] = useState("");
  const { setProduct } = useEdisonContext();
  const quearyParam = useMyParams();

  const debounced = useDebounce(inputVal, 700);

  async function searchedProducts() {
    try {
      if (quearyParam) {
        const response = await axios.get(
          `${baseURL}/api/products/?search=${debounced}&category_id=${quearyParam}`
        );
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      } else {
        const response = await axios.get(
          `${baseURL}/api/products/?search=${debounced}`
        );
        if (response.status === 200) {
          setProduct(response.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    searchedProducts();
  }, [debounced]);

  return (
    <div className="container" style={{ paddingTop: 0 }}>
      <div className="search-box">
        <button className="searchIcon">
          <CiSearch />
        </button>
        <input
          type="search"
          className="searchInput"
          autoComplete="off"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default SearchInput;

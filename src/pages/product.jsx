import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const responce = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    });
    console.log("responce", responce);

    if (responce.status == 200) {
      setProducts(responce.data);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const DeleteProduct = async (id) => {
    const responce = await axios({
      url: "https://fakestoreapi.com/products/" + id,
      method: "delete",
    });
    console.log("delete", responce);
    if (responce) {
      alert("Successfully delete!");
      fetchProducts();
    } else {
      alert("Error");
    }
  };

  return (
    <div className="product container-fluid">
      <h1 className="text-center pt-5 pb-4 text-primary">Product List</h1>
      <div className="row">
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <div className="col-3 ps-5 card mb-5 ms-5 bg-primary">
                <img className="pt-3 pb-4" src={product.image} alt="" width={'200px'} />
                <h5>{product.title}</h5>
                <button className="btn btn-light mb-3" onClick={() => DeleteProduct(product.id)}>
                  Delete
                </button>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default Product;

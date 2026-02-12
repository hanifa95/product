import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Newproduct = () => {
  const [products, setProducts] = useState([]);

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState("");

  const addProduct = async (e) => {
    e.preventDefault();
    const responce = await axios({
      method: "post",
      url: "https://fakestoreapi.com/products/",
      data: {
        title: title,
        price: price,
        description: description,
        categoryId: 1,
        images: [images],
      },
    });
    console.log("res", responce);
    if (responce.status == 201 || responce.status == 200) {
      alert("Product added");
      setTitle('')
      setPrice('')
      setDescription('')
      setCategory('')
      setImages('')
    } else {
      alert("Smth went wrong");
    }
  };

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
      <h1 className="text-center pt-5 pb-4 text-success">
        Product List
        <button
          type="button"
          class="btn btn-success ms-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>{" "}
      </h1>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Product
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control mb-3"
                value={title}
              />
              <input
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
                className="form-control mb-3"
                value={price}
              />
              <input
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
                className="form-control mb-3"
                value={description}
              />
              <input
                type="number"
                placeholder="Category ID"
                onChange={(e) => setCategory(e.target.value)}
                className="form-control mb-3"
                value={category}
              />
              <input
                type="text"
                placeholder="Image URL"
                onChange={(e) => setImages(e.target.value)}
                className="form-control mb-3"
                value={images}
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={addProduct}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="row">
        {products.length > 0 && (
          <>
            {products.map((product) => (
              <div className="col-3 ps-5 card mb-5 ms-5 bg-success">
                {/* <img
                  className="pt-3 pb-4"
                  src={product.image}
                  alt=""
                  width={"200px"}
                /> */}

                <a href={"/detailproduct/" + product.id}>
                  <img
                    src={product.image}
                    alt=""
                    className="pt-3 pb-4"
                    width={"200px"}
                  />
                </a>

                <h5>{product.title}</h5>
                <p>{product.id}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <button
                  className="btn btn-light mb-3"
                  onClick={() => DeleteProduct(product.id)}
                >
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
export default Newproduct;

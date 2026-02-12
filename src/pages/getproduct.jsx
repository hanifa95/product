import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Getproduct = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = () => localStorage.getItem("user") !== null;

  const navigate = useNavigate();

  const SignIn = async () => {
    const response = await axios({
      method: "get",
      url: "https://fakestoreapi.com/products",
    });
    console.log(response.data);
    if (response.status == 200) {
      const user = response.data.find(
        (user) => user.email == login && user.password == password
      );
      if (user) {
        alert("User logged in successfully");
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/detail");
      } else {
        alert("User not found");
      }
    }
  };
  useEffect(() => {
    if (isLoggedIn()) {
      window.location.href = "/detail";
    }
  }, [isLoggedIn]);

  return (
    <div className="container-fluid entrance">
      {/* <div className="row">
        <div className="col-3"></div>
        <div className="col-6 ">
        <h1 className="text-center text-warning pt-5 pb-3">Login</h1>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setLogin(e.target.value)}
          className="form-control"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <div className="text-center">
          <button className="btn btn-warning col-5 mt-3" onClick={SignIn}>
            {" "}
            Sign In
          </button>
        </div>
      </div>

      </div> */}
      <h1>{}</h1>
 
    </div>
  );
};
export default Getproduct;
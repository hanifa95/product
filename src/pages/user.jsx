import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const addUser = async (e) => {
    e.preventDefault();
    const responce = await axios({
      method: "post",
      url: "https://fakestoreapi.com/users/",
      data: {
        username: username,
        email: email,
        password: password,
      },
    });
    console.log("res", responce);
    if (responce.status == 201 || responce.status == 200) {
      alert("Product added");
      setUsername('')
      setEmail('')
      setPassword('')
    } else {
      alert("Smth went wrong");
    }
  };

  const fetchUsers = async () => {
    const responce = await axios({
      method: "get",
      url: "https://fakestoreapi.com/users",
    });
    console.log("responce", responce);

    if (responce.status == 200) {
      setUsers(responce.data);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const DeleteUser = async (id) => {
    const responce = await axios({
      url: "https://fakestoreapi.com/users/" + id,
      method: "delete",
    });
    console.log("delete", responce);
    if (responce) {
      alert("Successfully delete!");
      fetchUsers();
    } else {
      alert("Error");
    }
  };

  return (
    <div className="product container-fluid">
      <h1 className="text-center pt-5 pb-4 text-warning">
        User List
        <button
          type="button"
          class="btn btn-warning ms-5"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add User
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
                User
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
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                className="form-control mb-3"
                value={username}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="form-control mb-3"
                value={email}
              />
              <input
                type="number"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="form-control mb-3"
                value={password}
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
                class="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={addUser}
              >
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="row">
        {users.length > 0 && (
          <>
            {users.map((user) => (
              <div className="col-3 ps-5 pe-4 card mb-5 ms-5 bg-danger-subtle">


                <a href={"/detailproduct/" + user.id}>
                  <img
                    src={user.image}
                    alt=""
                    className="pt-3 pb-4"
                    width={"200px"}
                  />
                </a>

                <h5>Username: {user.username}</h5>
                <p>User ID{user.id}</p>
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                
                <button
                  className="btn btn-warning mb-3"
                  onClick={() => DeleteUser(user.id)}
                >
                  Delete
                </button>
                <div className="pt-2 pb-4">
                <a className="text-warning" href="{/detailuser/ + user.id}">Подробнее...</a>
                </div>
              
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
export default User;
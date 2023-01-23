import "./App.css";

import axios from "axios";

import { useState, useEffect } from "react";
const url = "https://randomuser.me/api/?results=3";

const AppUser = () => {
  const [users, setUser] = useState([]);

  const usersFecht = async () => {
    try {
      const { data } = await axios.get(url);
      setUser(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    usersFecht();
  }, []);

  return (
    <div className="row container">
      {users.map((user) => (
        <div key={user.id.value} className="col-md-4">
          <div className="card profile-card-3">
            <div class="background-block">
              <img
                src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="profile-sample1"
                class="background"
              />
            </div>
            <div className="profile-thumb-block">
              {" "}
              <img src={user.picture.medium} alt="img" className="profile mb-5" />
            </div>
            <div className="card-content">
              <p className="text-md">
                {user.name.first} {user.name.last}{" "}
              </p>
              <p className="text-sm">Género: {user.gender}</p>
              <small>
                {" "}
                <p className="text-sm"> Correo: {user.email}</p>{" "}
              </small>

              <p className="text-sm font-serif">
                País: {user.location.country}
              </p>
              <div className="icon-block">
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#">
                  {" "}
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#">
                  {" "}
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="my-4 d-grid gap-2 col-2 mx-auto">
        <button className="btn btn-outline-dark tex-md" onClick={usersFecht}>
          Otro
        </button>
      </div>
    </div>
  );
};

export default AppUser;

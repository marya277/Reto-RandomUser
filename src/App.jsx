import "./App.css";
import axios from "axios";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


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
    <div className="container-fluid p-0">
      <Header/>
    
    <div className="row container-fluid my-5">
      {users.map((user) => (
        <div key={user.id.value} className="col-sm-6 col-md-4 gy-5">
          <div className="card profile-card-3 my-5 mx-auto">
            <div className="background-block">
              <img
                src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="profile-sample1"
                className="background"
              />
            </div>
            <div className="profile-thumb-block">
              <img src={user.picture.medium} alt="img" className="profile mb-5" />
            </div>
            <div className=" card-body card-content mb-5">
              <p className="text-md">{user.name.first} {user.name.last}</p>
              <p className="text-sm">Género: {user.gender}</p>
              <small><p className="text-sm"> Telefono: {user.phone}</p></small>

              <p className="text-sm font-serif">País: {user.location.country}</p>

              <div className="icon-block mx-auto">
                <a href="#"> <i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-google-plus"></i></a> 
              </div>

            </div>
          </div>
        </div>
      ))}
      <div className="d-grid gap-3 col-2 mx-auto">
        <button className="btn btn-outline-dark userbtn text-md mb-3" onClick={usersFecht}>
          Otro user
        </button>
      </div>
    </div>
<Footer />
    </div>
  );
};
export default AppUser;

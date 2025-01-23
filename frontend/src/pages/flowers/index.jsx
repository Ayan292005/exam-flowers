import React, { useContext, useEffect, useState } from "react";
let DBurl = "http://localhost:2020/flowers";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { favoritesContext } from "../../context/FavsContext";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";

function Flowers() {
  let [data, setData] = useState([]);
   let {favorites,setFavorites}=useContext(favoritesContext)

  function getData() {
    axios.get(DBurl).then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    getData();
  });

  function handleAddFavorite(product) {
    let findedFav=favorites.find(favorite=>favorite._id==product._id)
    if (findedFav) {
      alert("you already have it")
    } else {
      setFavorites([...favorites,product])
    }
  }
  return (
    <div>
      <Helmet>
              <meta charSet="utf-8" />
              <title>flowers</title>
              
            </Helmet>
      <div className="cards cont">
        {data &&
          data.map((product) => (
            <div key={product._id} className="card">
              <img src={product.image} alt="" />
              <p>Fly Me To The Moon</p>
              <p>{product.name}</p>
              <p className="card-price">{product.price}$</p>
              <div className="card-icons">
                <div className="card-icon">
                  <NavLink to={`/flowers/${product._id}`}><IoIosSearch /></NavLink>
                </div>
                <div className="card-icon" onClick={()=>handleAddFavorite(product)}>
                  <CiHeart />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Flowers;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Details() {
  let [product, setProduct] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  function getDetails() {
    axios.get(`http://localhost:2020/flowers/${id}`)
    .then((res) => {
      setProduct(res.data.data);
    });
  }

    useEffect(()=>{
        getDetails()
    },[id])
  return (
    <div>
      sxuf
      <img src={product.image} alt="" />
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Details;

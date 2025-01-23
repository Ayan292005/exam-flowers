import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
let DBurl = "http://localhost:2020/flowers";
import { Helmet } from "react-helmet";

function Add() {
  let [data, setData] = useState([]);

  const formik = useFormik({
    initialValues: {
      image: "",
      name: "",
      price: "",
    },
    onSubmit: (values) => {
      axios.post(DBurl, values);
    },
  });

  function getData() {
    axios.get(DBurl).then((res) => {
      setData(res.data);
    });
  }

  useEffect(() => {
    getData();
  },[]);

  function handleDelete(id) {
  
    let delProduct = data.filter((el) => el._id !== id);
    setData(delProduct)
    console.log(delProduct);

    axios.delete(`DBurl/${id}`)
    .then((res)=>{
      setData(res.data)
    })

  }
  return (
    <div className="cont">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
      </Helmet>
      <form onSubmit={formik.handleSubmit} className="add-from">
        <label htmlFor="image">Image</label>
        <input
          id="image"
          name="image"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.image}
        />

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />

        <label htmlFor="price">Price</label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          value={formik.values.price}
        />

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>

      <div>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "left" }}>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((product) => (
                <tr>
                  <td>
                    <img src={product.image} alt="" className="table-img" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}$</td>
                  <td>
                    <button
                      className="del-btn"
                      onClick={() => handleDelete(product._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Add;

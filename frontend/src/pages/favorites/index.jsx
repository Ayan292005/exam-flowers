import React, { useContext } from 'react'
import { favoritesContext } from '../../context/FavsContext'
import { FaHeartBroken } from "react-icons/fa";
import { Helmet } from "react-helmet";

function Favorites() {
  let {favorites,setFavorites}=useContext(favoritesContext)

  function handleDeleteFavs(id) {
    let delFav=favorites.filter(favorite=>favorite._id!==id)
    setFavorites(delFav)
  }
  return (
    <div>
      <Helmet>
              <meta charSet="utf-8" />
              <title>Favorites</title>
              
            </Helmet>
      <div className='cont cards'>
    {
      favorites.map(favorite=>
        <div key={favorite._id} className='card'>
          <img src={favorite.image} alt="" />
          <p>{favorite.name}</p>
          <p>{favorite.price}$</p>
          <p onClick={()=>handleDeleteFavs(favorite._id)}><FaHeartBroken /></p>
        </div>
      )
    }
      </div>
    </div>
  )
}

export default Favorites

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllFavorites } from '../../store/favorite';
import {FaHeart} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { removeFromFavoritesList } from '../../store/favorite';
import './Favorites.css';


const Favorites = ({user}) => {

    const dispatch = useDispatch();
    const favoriteObject = useSelector((state) => state.favorite)
    const favorites = Object.values(favoriteObject)
    let favoriteComponents;

    useEffect(() => {
        dispatch(getAllFavorites(user.id))
    }, [dispatch, user.id])


    const removeFromFavs = async (productId) => {
        await dispatch(removeFromFavoritesList(user.id, productId))
        await dispatch(getAllFavorites(user.id))
      }

    if (!favorites.length) {
        favoriteComponents = 
        <div className="empty-cart-content">
            {/* <div className="favorites-header">Favorites</div> */}
            <div className="favorite-page-heart"><FaHeart/></div>
            <div className="lots-of-room">Lots of room for the things you love.</div>
            <p>Explore our products and add your favorites anywhere you see a heart.</p>
            <div>
                <NavLink to="/"><button className="cart-button white-blue-button">Start Shopping</button></NavLink>
            </div>
        </div>
    } else {
        favoriteComponents = favorites?.map((favorite) => {

            return (
              <div className="product-container" key={favorite.id}>
                <div className="product-image-container">
                  <div className="favorited-icon-category-page" onClick={() => {removeFromFavs(favorite.product.id)}}><FaHeart/></div>
                  <div className="product-images"><NavLink to={`/products/${favorite.product.id}`}>
                    <img className="image-1" src={favorite.product.image_url1} alt="product"/>
                    <img className="image-2" src={favorite.product.image_url2} alt="product"/>
                    </NavLink></div>
                </div>
                <div className="product-name-card">{favorite.product.name}</div>
                <div className="shipping-and-price">
                  <div className="free-shipping-product">Free Shipping</div>
                  <div className="product-price-card-discount">{favorite.product.discount?`$${favorite.product.original_price}`: null}</div>
                  <div className="product-price-card-discount-text">{favorite.product.discount? 'Limited Time Offer' : null}</div>
                  <div className="product-price-card">${favorite.product.final_price}</div>
                </div>
              </div>
            );
          });
    }

    return (
        <>
        <div className="category-container">
          <>
          {favoriteComponents}
          </>
        </div>
      </>
    )
}

export default Favorites;
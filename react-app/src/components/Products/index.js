import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, NavLink } from 'react-router-dom';
import { getOneproduct } from '../../store/product';
import { addToCart } from '../../store/shoppingcart';
import Footer from '../Footer';

function ProductPage() {

    const { productId } = useParams();
    const dispatch = useDispatch(); 
    const product = useSelector((state) => state.product)
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const [isLoaded, setisLoaded] = useState(false)
    const [quantity, setQuantity] = useState(0);
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        dispatch(getOneproduct(productId))
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setisLoaded(true)
        }, 300);
        return () => clearTimeout(timer);
    }, []);

    const isLoading =
        <div className="isLoading"></div>

    const addToShoppingcart = async () => {
        await dispatch(addToCart(user.id, parseInt(productId, 10), quantity))
        .then(() => history.push("/shoppingcart"))
    }

    const decreaseQuantity = () => {
        console.log(quantity)
        if (quantity === 0) {
            return 0;
        } else {
            setQuantity(quantity - 1);
        }
    }

    const increaseQuantity = () => {
        console.log(quantity)
        setQuantity(quantity + 1)
    }

    const ProductComponents = (
        <>
        <div className="product-page-container">
            <div className="small-photo-container">
                <div type="button" className="small-photos" onClick={(e) => {
                    setPhotoUrl(product.image_url1)}}>
                    <img src={product.image_url1} alt="product 1"/></div>
                <div type="button" className="small-photos" onClick={(e) => {
                    setPhotoUrl(product.image_url2)}}>
                    <img src={product.image_url2} alt="product 2"/></div>
            </div>
            <div className="large-photo-container">
                {photoUrl? 
                <div><img src={photoUrl} alt="product"/></div> :
                <div><img src={product.image_url1} alt="product"/></div>
                }
            </div>
            <div className="product-info-container">
                <div className="free-shipping-top">Free Shipping</div>
                <div className="product-info-name">{product.name}</div>
                <div className="product-info-discount-price">{product.discount?`$${product.original_price}`: null}</div>
                <div className="product-info-discount-text">{product.discount? 'Limited Time Offer' : null}</div>
                <div className="product-info-final-price">${product.final_price}</div>
                <div>
                        <div className="item-price quantity">QUANTITY</div>
                        <div className="item-quantity-product-form">
                            <button type="button" className="add-subtract-button subtract" onClick={decreaseQuantity}>-</button>
                            <form className="quantity-container-product-page">
                                <input
                                    type="text"
                                    value={quantity}
                                    onChange={(e) => {
                                        setQuantity(parseInt(e.target.value), 10)
                                    }}
                                    name="quantity"
                                />
                            </form>
                            <button type="button" className="add-subtract-button add" onClick={increaseQuantity}>+</button>
                        </div>
                </div>
                <div className="free-shipping-bottom">Free Shipping</div>
                {user? 
                <button className="product-add-to-cart" type="button" onClick={addToShoppingcart}>Add To Cart</button> :
                <NavLink to="/login"><button className="product-login-button">Log in or Sign Up to Add To Cart</button></NavLink>
                }
            </div>
        </div>
        <Footer />
        </>
    );

    return (
        <>
        {isLoaded ? ProductComponents : null}
        </>
    )
};

export default ProductPage;
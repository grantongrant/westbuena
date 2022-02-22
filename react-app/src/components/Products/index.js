import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getOneproduct } from '../../store/product';
import { addToCart } from '../../store/shoppingcart';
import Footer from '../Footer';

function ProductPage() {

    const { productId } = useParams();
    const dispatch = useDispatch(); 
    const product = useSelector((state) => state.product)
    const user = useSelector(state => state.session.user);
    const history = useHistory();
    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
        dispatch(getOneproduct(productId))
      }, [dispatch, productId]);

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

    return (
        <>
        <div className="product-page-container">
            <div className="small-photo-container"></div>
            <div className="large-photo-container">
                <ul><img src={product.image_url1} alt="product"/></ul>
            </div>
            <div className="product-info-container">
                <div>Free Shipping</div>
                <div>{product.name}</div>
                <div>{product.discount? `${product.original_price}` : null}</div>
                <div>${product.final_price}</div>
                <div>
                        <div className="item-price quantity">QUANTITY</div>
                        <div className="item-quantity-product-form">
                            <button type="button" onClick={decreaseQuantity}>-</button>
                            <form className="quantity-container">
                                <input
                                    type="text"
                                    value={quantity}
                                    onChange={(e) => {
                                        setQuantity(parseInt(e.target.value), 10)
                                    }}
                                    name="quantity"
                                />
                            </form>
                            <button type="button" onClick={increaseQuantity}>+</button>
                        </div>
                </div>
                <div>Free Shipping</div>
                <button type="button" onClick={addToShoppingcart}>Add To Cart</button>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default ProductPage;
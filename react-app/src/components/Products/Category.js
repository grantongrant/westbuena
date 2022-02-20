import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect } from 'react';
import { getProductsByCategory } from '../../store/product';
import { useDispatch, useSelector } from 'react-redux';



function CategoryPage() {
  
    const { category } = useParams();
    const dispatch = useDispatch();
    const productObject = useSelector((state) => state.product)
    const products = Object.values(productObject)

    useEffect(() => {
      dispatch(getProductsByCategory(category))
    }, [dispatch, category]);

    const categoryComponents = products?.map((product) => {
        return (
          <li key={product.id}>
            <NavLink to={`/products/${product.id}`}><img src={product.image_url1} alt="product"/></NavLink>
          </li>
        );
      });

    return (
        <div>
            <h1>Hello from {category}!</h1>
            {categoryComponents}
        </div>
        
        
    )

}

export default CategoryPage;
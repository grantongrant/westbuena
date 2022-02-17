import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function CategoryPage() {

    const { category } = useParams();
    console.log(category)
    const [products, setProducts] = useState();

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(`/api/products/${category}`);
        const responseData = await response.json();
        console.log(responseData)
        setProducts(responseData.products)
    }
    fetchData();
    }, [category]);

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
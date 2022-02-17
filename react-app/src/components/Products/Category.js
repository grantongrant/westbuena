import { useParams, NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';


function CategoryPage() {

    const { category } = useParams();
    const [products, setProducts] = useState();
    console.log(products)

    useEffect(() => {
        async function fetchData() {
        const response = await fetch(`/api/products/${category}`);
        const responseData = await response.json();
        console.log(responseData)
        setProducts(responseData.categories)
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
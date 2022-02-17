import { useParams } from 'react-router-dom';


function CategoryPage() {

    const { category } = useParams();
    console.log(category)

    return (
        <h1>Hello from {category}!</h1>
    )

}

export default CategoryPage;
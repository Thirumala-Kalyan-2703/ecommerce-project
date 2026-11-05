import { Link } from 'react-router-dom';
import Rating from './Rating.jsx';
const ProductCard = ({product})=>{
    return(
    <article className="rounded-lg bg-white p-4 shadow-sm">
        <Link to={`/product/${product._id}`}>
        <img src={product.image} alt={product.name}  className="h-56 w-full object-contain p-4"/>
        <h2 className="text-lg font-semibold text-slate-900 hover:text-blue-600">{product.name}</h2>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <p className="mt-3 text-xl font-bold text-slate-900">${product.price}</p>
    </article>
        
    )
}

export default ProductCard;
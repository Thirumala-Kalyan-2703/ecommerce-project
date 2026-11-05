
import { Link, useParams } from 'react-router-dom';
import products from '../products';
import Rating from '../components/Rating.jsx';

const ProductScreen = () => {
  const { id } = useParams();

  const product = products.find((item) => item._id === id);

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <Link
        to="/"
        className="inline-block mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Go Back
      </Link>

      {product ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg bg-white p-4 object-contain"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-slate-900">
              {product.name}
            </h1>

            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            />

            <p className="text-2xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-slate-600">
              {product.description}
            </p>

            <p className="text-slate-600">
              Brand: {product.brand}
            </p>

            <p className="text-slate-600">
              Category: {product.category}
            </p>

            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <span className="font-semibold">Price:</span>
                <span>${product.price.toFixed(2)}</span>
              </div>

              <div className="flex justify-between py-3">
                <span className="font-semibold">Status:</span>
                <span
                  className={
                    product.countInStock > 0
                      ? 'text-green-600'
                      : 'text-red-600'
                  }
                >
                  {product.countInStock > 0
                    ? 'In Stock'
                    : 'Out Of Stock'}
                </span>
              </div>

              <button
                type="button"
                disabled={product.countInStock === 0}
                className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-red-600">Product not found</p>
      )}
    </main>
  );
};

export default ProductScreen;

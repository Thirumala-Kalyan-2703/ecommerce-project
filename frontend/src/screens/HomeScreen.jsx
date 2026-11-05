import ProductCard from '../components/ProductCard.jsx';
import products from '../products';

const HomeScreen = () => {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-slate-900">
        Latest Products
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product}/>
        ))}
      </div>
    </main>
  );
};

export default HomeScreen;

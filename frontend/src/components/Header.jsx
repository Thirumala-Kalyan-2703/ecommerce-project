
import { ShoppingCart, UserRound } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-900 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Brand */}
        <a href="/" className="text-2xl font-bold">
          MyShop
        </a>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <a
            href="/cart"
            className="flex items-center gap-2 transition-colors hover:text-blue-300"
          >
            <ShoppingCart size={20} aria-hidden="true" />
            <span>Cart</span>
          </a>

          <a
            href="/login"
            className="flex items-center gap-2 transition-colors hover:text-blue-300"
          >
            <UserRound size={20} aria-hidden="true" />
            <span>Login</span>
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;


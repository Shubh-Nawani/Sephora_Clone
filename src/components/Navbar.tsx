import { Search, ShoppingBag, User } from 'lucide-react';
import { Link } from './ui/Link';

export function Navbar() {
  return (
    <nav className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">SEPHORA</Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full px-4 py-2 pl-10 pr-4 rounded-full border focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/account" className="flex items-center space-x-1 hover:text-red-500">
              <User size={20} />
              <span>Account</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-1 hover:text-red-500">
              <ShoppingBag size={20} />
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
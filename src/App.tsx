import { Navbar } from './components/Navbar';
import { CategoryNav } from './components/CategoryNav';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <CategoryNav />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Sephora</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Social Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">My Sephora</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Beauty Insider</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Orders</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Account Settings</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Customer Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchange</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Use</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 Sephora Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
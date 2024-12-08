export function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
      <div className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600&q=80"
          alt="Beauty Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-lg">
              <h1 className="text-4xl font-bold text-white mb-4">
                Discover Your Perfect Beauty Routine
              </h1>
              <p className="text-lg text-white mb-8">
                Shop the latest in makeup, skincare, and fragrance from top luxury brands
              </p>
              <button className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
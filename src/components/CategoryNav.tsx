export function CategoryNav() {
  const categories = [
    'New',
    'Brands',
    'Makeup',
    'Skincare',
    'Hair',
    'Fragrance',
    'Tools & Brushes',
    'Bath & Body',
    'Mini Size',
    'Gifts',
  ];

  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-8 h-12 items-center">
          {categories.map((category) => (
            <li key={category}>
              <a
                href={`/category/${category.toLowerCase()}`}
                className="text-sm font-medium text-gray-700 hover:text-red-500 transition-colors"
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
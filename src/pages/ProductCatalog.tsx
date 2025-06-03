import React, { useState, useEffect, useMemo } from 'react';
import { useStore } from '../store/store';
import { products, categories, subcategories } from '../data/products';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useInfiniteScroll } from '../utils/useInfiniteScroll';

const ITEMS_PER_PAGE = 16;

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const addToCart = useStore((state) => state.addToCart);

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }

    if (selectedSubcategory) {
      filtered = filtered.filter(
        (product) => product.subcategory === selectedSubcategory
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  useEffect(() => {
    setVisibleItems(ITEMS_PER_PAGE);
  }, [searchTerm, selectedCategory, selectedSubcategory]);

  const loadMoreItems = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setVisibleItems((prev) => {
      const newValue = prev + ITEMS_PER_PAGE;
      return Math.min(newValue, filteredProducts.length);
    });
    
    setIsLoading(false);
  };

  const [isFetching] = useInfiniteScroll(loadMoreItems);

  const visibleProducts = filteredProducts.slice(0, visibleItems);
  const hasMoreProducts = visibleItems < filteredProducts.length;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filters */}
      <div className="mb-8 sticky top-0 bg-white z-10 py-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
            </div>
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
          >
            <option value="">All Subcategories</option>
            {selectedCategory &&
              subcategories[selectedCategory as keyof typeof subcategories].map(
                (subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                )
              )}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-primary-600">
                  ₹{product.price}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Loading States */}
      <div className="text-center py-8">
        {isLoading && (
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-600 border-t-transparent"></div>
        )}
        {!isLoading && hasMoreProducts && (
          <button
            onClick={loadMoreItems}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-300"
          >
            Load More Products
          </button>
        )}
        {!hasMoreProducts && visibleProducts.length > 0 && (
          <p className="text-gray-600">No more products to load</p>
        )}
        {visibleProducts.length === 0 && (
          <p className="text-gray-600">No products found matching your criteria</p>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog; 
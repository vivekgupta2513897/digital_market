export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory?: string;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
}

export const products: Product[] = [
  // Men's Clothing
  {
    id: 'mc1',
    name: 'Classic Fit Dress Shirt',
    description: 'Premium cotton dress shirt with a comfortable classic fit',
    price: 49.99,
    category: "Men's Clothing",
    subcategory: 'Shirts',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10',
    rating: 4.5,
    reviews: 128,
    inStock: true
  },
  {
    id: 'mc2',
    name: 'Slim Fit Chino Pants',
    description: 'Modern slim fit chinos in versatile navy blue',
    price: 59.99,
    category: "Men's Clothing",
    subcategory: 'Pants',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80',
    rating: 4.3,
    reviews: 95,
    inStock: true
  },
  {
    id: 'mc3',
    name: 'Casual Denim Jacket',
    description: 'Stylish denim jacket perfect for layering',
    price: 79.99,
    category: "Men's Clothing",
    subcategory: 'Jackets',
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 'mc4',
    name: 'Wool Blend Sweater',
    description: 'Warm and comfortable wool blend sweater',
    price: 69.99,
    category: "Men's Clothing",
    subcategory: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1614975058789-41316d0e2cc9',
    rating: 4.4,
    reviews: 82,
    inStock: true
  },
  {
    id: 'mc5',
    name: 'Performance Polo Shirt',
    description: 'Moisture-wicking polo shirt for active lifestyle',
    price: 39.99,
    category: "Men's Clothing",
    subcategory: 'Polo Shirts',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    rating: 4.6,
    reviews: 112,
    inStock: true
  },

  // Men's Shoes
  {
    id: 'ms1',
    name: 'Leather Oxford Shoes',
    description: 'Classic leather oxford shoes for formal occasions',
    price: 129.99,
    category: "Men's Shoes",
    subcategory: 'Formal Shoes',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4',
    rating: 4.8,
    reviews: 203,
    inStock: true
  },
  {
    id: 'ms2',
    name: 'Running Sneakers',
    description: 'Lightweight running shoes with superior cushioning',
    price: 89.99,
    category: "Men's Shoes",
    subcategory: 'Athletic Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.5,
    reviews: 167,
    inStock: true
  },
  {
    id: 'ms3',
    name: 'Casual Loafers',
    description: 'Comfortable slip-on loafers for everyday wear',
    price: 79.99,
    category: "Men's Shoes",
    subcategory: 'Casual Shoes',
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a',
    rating: 4.4,
    reviews: 98,
    inStock: true
  },
  {
    id: 'ms4',
    name: 'Hiking Boots',
    description: 'Durable hiking boots with waterproof technology',
    price: 149.99,
    category: "Men's Shoes",
    subcategory: 'Boots',
    image: 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: 'ms5',
    name: 'Canvas Sneakers',
    description: 'Classic canvas sneakers for casual style',
    price: 49.99,
    category: "Men's Shoes",
    subcategory: 'Casual Shoes',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
    rating: 4.3,
    reviews: 89,
    inStock: true
  },

  // Men's Accessories
  {
    id: 'ma1',
    name: 'Leather Belt',
    description: 'Genuine leather belt with classic buckle',
    price: 39.99,
    category: "Men's Accessories",
    subcategory: 'Belts',
    image: 'https://images.unsplash.com/photo-1624222247344-550fb60583eb',
    rating: 4.6,
    reviews: 112,
    inStock: true
  },
  {
    id: 'ma2',
    name: 'Silk Tie',
    description: 'Premium silk tie for formal occasions',
    price: 29.99,
    category: "Men's Accessories",
    subcategory: 'Ties',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10',
    rating: 4.4,
    reviews: 78,
    inStock: true
  },
  {
    id: 'ma3',
    name: 'Leather Wallet',
    description: 'Slim leather wallet with multiple card slots',
    price: 34.99,
    category: "Men's Accessories",
    subcategory: 'Wallets',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },
  {
    id: 'ma4',
    name: 'Sunglasses',
    description: 'Classic aviator sunglasses with UV protection',
    price: 89.99,
    category: "Men's Accessories",
    subcategory: 'Eyewear',
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666',
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  {
    id: 'ma5',
    name: 'Leather Gloves',
    description: 'Premium leather gloves for cold weather',
    price: 44.99,
    category: "Men's Accessories",
    subcategory: 'Gloves',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990',
    rating: 4.3,
    reviews: 67,
    inStock: true
  },

  // Men's Bags
  {
    id: 'mb1',
    name: 'Leather Messenger Bag',
    description: 'Professional leather messenger bag for work',
    price: 149.99,
    category: "Men's Bags",
    subcategory: 'Messenger Bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    rating: 4.8,
    reviews: 189,
    inStock: true
  },
  {
    id: 'mb2',
    name: 'Backpack',
    description: 'Durable backpack with laptop compartment',
    price: 79.99,
    category: "Men's Bags",
    subcategory: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'mb3',
    name: 'Duffel Bag',
    description: 'Spacious duffel bag for travel and gym',
    price: 69.99,
    category: "Men's Bags",
    subcategory: 'Duffel Bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    rating: 4.4,
    reviews: 98,
    inStock: true
  },
  {
    id: 'mb4',
    name: 'Leather Briefcase',
    description: 'Classic leather briefcase for professionals',
    price: 199.99,
    category: "Men's Bags",
    subcategory: 'Briefcases',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'mb5',
    name: 'Crossbody Bag',
    description: 'Compact crossbody bag for everyday essentials',
    price: 49.99,
    category: "Men's Bags",
    subcategory: 'Crossbody Bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    rating: 4.3,
    reviews: 76,
    inStock: true
  },

  // Men's Watches
  {
    id: 'mw1',
    name: 'Automatic Watch',
    description: 'Luxury automatic watch with leather strap',
    price: 299.99,
    category: "Men's Watches",
    subcategory: 'Automatic Watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 'mw2',
    name: 'Smart Watch',
    description: 'Advanced smartwatch with health tracking',
    price: 199.99,
    category: "Men's Watches",
    subcategory: 'Smart Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'mw3',
    name: 'Chronograph Watch',
    description: 'Sporty chronograph watch with multiple functions',
    price: 249.99,
    category: "Men's Watches",
    subcategory: 'Chronograph Watches',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: 'mw4',
    name: 'Diving Watch',
    description: 'Professional diving watch with water resistance',
    price: 349.99,
    category: "Men's Watches",
    subcategory: 'Diving Watches',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa',
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  {
    id: 'mw5',
    name: 'Minimalist Watch',
    description: 'Sleek minimalist watch with mesh strap',
    price: 149.99,
    category: "Men's Watches",
    subcategory: 'Minimalist Watches',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0',
    rating: 4.5,
    reviews: 134,
    inStock: true
  },

  // Women's Clothing
  {
    id: 'wc1',
    name: 'Floral Dress',
    description: 'Elegant floral print dress for summer',
    price: 79.99,
    category: "Women's Clothing",
    subcategory: 'Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'wc2',
    name: 'Cashmere Sweater',
    description: 'Luxurious cashmere sweater for winter',
    price: 129.99,
    category: "Women's Clothing",
    subcategory: 'Sweaters',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
    rating: 4.8,
    reviews: 189,
    inStock: true
  },
  {
    id: 'wc3',
    name: 'High-Waisted Jeans',
    description: 'Stylish high-waisted jeans with perfect fit',
    price: 69.99,
    category: "Women's Clothing",
    subcategory: 'Jeans',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'wc4',
    name: 'Blouse',
    description: 'Elegant silk blouse for professional wear',
    price: 59.99,
    category: "Women's Clothing",
    subcategory: 'Tops',
    image: 'https://images.unsplash.com/photo-1604575396136-79d175778d1d',
    rating: 4.5,
    reviews: 123,
    inStock: true
  },
  {
    id: 'wc5',
    name: 'Pencil Skirt',
    description: 'Classic pencil skirt for office wear',
    price: 49.99,
    category: "Women's Clothing",
    subcategory: 'Skirts',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa',
    rating: 4.4,
    reviews: 98,
    inStock: true
  },

  // Women's Shoes
  {
    id: 'ws1',
    name: 'Leather Boots',
    description: 'Stylish leather boots for winter',
    price: 149.99,
    category: "Women's Shoes",
    subcategory: 'Boots',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  {
    id: 'ws2',
    name: 'High Heels',
    description: 'Elegant high heels for formal occasions',
    price: 89.99,
    category: "Women's Shoes",
    subcategory: 'Heels',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'ws3',
    name: 'Running Shoes',
    description: 'Comfortable running shoes for active lifestyle',
    price: 99.99,
    category: "Women's Shoes",
    subcategory: 'Athletic Shoes',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'ws4',
    name: 'Ballet Flats',
    description: 'Classic ballet flats for everyday wear',
    price: 59.99,
    category: "Women's Shoes",
    subcategory: 'Flats',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    rating: 4.5,
    reviews: 134,
    inStock: true
  },
  {
    id: 'ws5',
    name: 'Sandals',
    description: 'Comfortable sandals for summer',
    price: 49.99,
    category: "Women's Shoes",
    subcategory: 'Sandals',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    rating: 4.4,
    reviews: 98,
    inStock: true
  },

  // Women's Watches
  {
    id: 'ww1',
    name: 'Diamond Watch',
    description: 'Luxury watch with diamond accents',
    price: 399.99,
    category: "Women's Watches",
    subcategory: 'Luxury Watches',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 'ww2',
    name: 'Smart Watch',
    description: 'Fitness tracking smartwatch for women',
    price: 179.99,
    category: "Women's Watches",
    subcategory: 'Smart Watches',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'ww3',
    name: 'Rose Gold Watch',
    description: 'Elegant rose gold watch with leather strap',
    price: 249.99,
    category: "Women's Watches",
    subcategory: 'Fashion Watches',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 'ww4',
    name: 'Minimalist Watch',
    description: 'Sleek minimalist watch with mesh band',
    price: 149.99,
    category: "Women's Watches",
    subcategory: 'Minimalist Watches',
    image: 'https://images.unsplash.com/photo-1539874754764-5a96559165b0',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'ww5',
    name: 'Ceramic Watch',
    description: 'Modern ceramic watch with scratch-resistant case',
    price: 299.99,
    category: "Women's Watches",
    subcategory: 'Luxury Watches',
    image: 'https://images.unsplash.com/photo-1547996160-81dfa63595aa',
    rating: 4.7,
    reviews: 156,
    inStock: true
  },

  // Women's Bags
  {
    id: 'wb1',
    name: 'Leather Tote Bag',
    description: 'Spacious leather tote bag for everyday use',
    price: 199.99,
    category: "Women's Bags",
    subcategory: 'Tote Bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    rating: 4.8,
    reviews: 189,
    inStock: true
  },
  {
    id: 'wb2',
    name: 'Crossbody Bag',
    description: 'Stylish crossbody bag with adjustable strap',
    price: 89.99,
    category: "Women's Bags",
    subcategory: 'Crossbody Bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'wb3',
    name: 'Clutch Bag',
    description: 'Elegant clutch bag for evening events',
    price: 69.99,
    category: "Women's Bags",
    subcategory: 'Clutch Bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    rating: 4.5,
    reviews: 123,
    inStock: true
  },
  {
    id: 'wb4',
    name: 'Backpack',
    description: 'Fashionable backpack with laptop compartment',
    price: 79.99,
    category: "Women's Bags",
    subcategory: 'Backpacks',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'wb5',
    name: 'Shoulder Bag',
    description: 'Versatile shoulder bag for work and leisure',
    price: 119.99,
    category: "Women's Bags",
    subcategory: 'Shoulder Bags',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3',
    rating: 4.4,
    reviews: 98,
    inStock: true
  },

  // Women's Jewelry
  {
    id: 'wj1',
    name: 'Diamond Necklace',
    description: 'Elegant diamond necklace for special occasions',
    price: 499.99,
    category: "Women's Jewelry",
    subcategory: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 'wj2',
    name: 'Pearl Earrings',
    description: 'Classic pearl earrings with sterling silver',
    price: 79.99,
    category: "Women's Jewelry",
    subcategory: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'wj3',
    name: 'Gold Bracelet',
    description: 'Delicate gold bracelet with charm',
    price: 149.99,
    category: "Women's Jewelry",
    subcategory: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 'wj4',
    name: 'Silver Ring',
    description: 'Modern silver ring with unique design',
    price: 59.99,
    category: "Women's Jewelry",
    subcategory: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'wj5',
    name: 'Crystal Pendant',
    description: 'Beautiful crystal pendant necklace',
    price: 89.99,
    category: "Women's Jewelry",
    subcategory: 'Pendants',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f',
    rating: 4.5,
    reviews: 123,
    inStock: true
  },

  // Smartphones
  {
    id: 'sp1',
    name: 'iPhone 13 Pro',
    description: 'Latest iPhone with advanced camera system',
    price: 999.99,
    category: 'Smartphones',
    subcategory: 'Apple',
    image: 'https://images.unsplash.com/photo-1632661674596-79bd8e9cfb1a',
    rating: 4.9,
    reviews: 567,
    inStock: true
  },
  {
    id: 'sp2',
    name: 'Samsung Galaxy S21',
    description: 'Powerful Android smartphone with 5G',
    price: 799.99,
    category: 'Smartphones',
    subcategory: 'Samsung',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c',
    rating: 4.7,
    reviews: 489,
    inStock: true
  },
  {
    id: 'sp3',
    name: 'Google Pixel 6',
    description: 'Google\'s flagship with amazing camera',
    price: 699.99,
    category: 'Smartphones',
    subcategory: 'Google',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    rating: 4.8,
    reviews: 345,
    inStock: true
  },
  {
    id: 'sp4',
    name: 'OnePlus 9',
    description: 'High-performance smartphone with fast charging',
    price: 649.99,
    category: 'Smartphones',
    subcategory: 'OnePlus',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    rating: 4.6,
    reviews: 278,
    inStock: true
  },
  {
    id: 'sp5',
    name: 'Xiaomi Mi 11',
    description: 'Feature-packed smartphone at great value',
    price: 599.99,
    category: 'Smartphones',
    subcategory: 'Xiaomi',
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    rating: 4.5,
    reviews: 234,
    inStock: true
  },

  // Tablets
  {
    id: 'tb1',
    name: 'iPad Pro',
    description: 'Powerful tablet for professionals',
    price: 799.99,
    category: 'Tablets',
    subcategory: 'Apple',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.9,
    reviews: 456,
    inStock: true
  },
  {
    id: 'tb2',
    name: 'Samsung Galaxy Tab S7',
    description: 'Android tablet with S Pen support',
    price: 649.99,
    category: 'Tablets',
    subcategory: 'Samsung',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.7,
    reviews: 389,
    inStock: true
  },
  {
    id: 'tb3',
    name: 'Microsoft Surface Pro',
    description: 'Versatile 2-in-1 tablet and laptop',
    price: 899.99,
    category: 'Tablets',
    subcategory: 'Microsoft',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.8,
    reviews: 345,
    inStock: true
  },
  {
    id: 'tb4',
    name: 'iPad Air',
    description: 'Thin and light iPad for everyday use',
    price: 599.99,
    category: 'Tablets',
    subcategory: 'Apple',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.6,
    reviews: 278,
    inStock: true
  },
  {
    id: 'tb5',
    name: 'Amazon Fire HD',
    description: 'Affordable tablet for entertainment',
    price: 149.99,
    category: 'Tablets',
    subcategory: 'Amazon',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    rating: 4.4,
    reviews: 198,
    inStock: true
  },

  // Laptops
  {
    id: 'lp1',
    name: 'MacBook Pro',
    description: 'Powerful laptop for professionals',
    price: 1299.99,
    category: 'Laptops',
    subcategory: 'Apple',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    rating: 4.9,
    reviews: 567,
    inStock: true
  },
  {
    id: 'lp2',
    name: 'Dell XPS 13',
    description: 'Premium ultrabook with stunning display',
    price: 999.99,
    category: 'Laptops',
    subcategory: 'Dell',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.8,
    reviews: 489,
    inStock: true
  },
  {
    id: 'lp3',
    name: 'HP Spectre x360',
    description: 'Convertible laptop with premium features',
    price: 899.99,
    category: 'Laptops',
    subcategory: 'HP',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.7,
    reviews: 345,
    inStock: true
  },
  {
    id: 'lp4',
    name: 'Lenovo ThinkPad',
    description: 'Business laptop with legendary durability',
    price: 799.99,
    category: 'Laptops',
    subcategory: 'Lenovo',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.6,
    reviews: 278,
    inStock: true
  },
  {
    id: 'lp5',
    name: 'ASUS ROG',
    description: 'Gaming laptop with high performance',
    price: 1499.99,
    category: 'Laptops',
    subcategory: 'ASUS',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },

  // New Electronics Products
  {
    id: 'el1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation',
    price: 299.99,
    category: 'Electronics',
    subcategory: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.8,
    reviews: 245,
    inStock: true
  },
  {
    id: 'el2',
    name: 'Smart Watch Series 5',
    description: 'Advanced smartwatch with health monitoring features',
    price: 399.99,
    category: 'Electronics',
    subcategory: 'Wearables',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'el3',
    name: '4K Ultra HD Smart TV',
    description: '55-inch 4K Smart TV with HDR technology',
    price: 799.99,
    category: 'Electronics',
    subcategory: 'TVs',
    image: 'https://images.unsplash.com/photo-1593784991095-a205069470b6',
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: 'el4',
    name: 'Professional DSLR Camera',
    description: '24.1MP DSLR camera with 4K video recording',
    price: 1299.99,
    category: 'Electronics',
    subcategory: 'Cameras',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 'el5',
    name: 'Gaming Laptop Pro',
    description: 'High-performance gaming laptop with RTX graphics',
    price: 1499.99,
    category: 'Electronics',
    subcategory: 'Laptops',
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302',
    rating: 4.8,
    reviews: 178,
    inStock: true
  },

  // Home & Kitchen Products
  {
    id: 'hk1',
    name: 'Smart Coffee Maker',
    description: 'WiFi-enabled coffee maker with app control',
    price: 149.99,
    category: 'Home & Kitchen',
    subcategory: 'Appliances',
    image: 'https://images.unsplash.com/photo-1570088931713-720e25d6e3a9',
    rating: 4.5,
    reviews: 167,
    inStock: true
  },
  {
    id: 'hk2',
    name: 'Stainless Steel Cookware Set',
    description: '10-piece professional cookware set',
    price: 299.99,
    category: 'Home & Kitchen',
    subcategory: 'Cookware',
    image: 'https://images.unsplash.com/photo-1584990347449-a2d4c2f1fce1',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: 'hk3',
    name: 'Smart Home Hub',
    description: 'Central control for all your smart home devices',
    price: 129.99,
    category: 'Home & Kitchen',
    subcategory: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: 'hk4',
    name: 'Memory Foam Mattress',
    description: 'Queen size memory foam mattress with cooling gel',
    price: 599.99,
    category: 'Home & Kitchen',
    subcategory: 'Bedding',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'hk5',
    name: 'Robot Vacuum Cleaner',
    description: 'Smart robot vacuum with mapping technology',
    price: 399.99,
    category: 'Home & Kitchen',
    subcategory: 'Appliances',
    image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },

  // Sports & Outdoors Products
  {
    id: 'so1',
    name: 'Mountain Bike',
    description: '21-speed mountain bike with disc brakes',
    price: 499.99,
    category: 'Sports & Outdoors',
    subcategory: 'Cycling',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'so2',
    name: 'Yoga Mat Premium',
    description: 'Non-slip yoga mat with alignment lines',
    price: 39.99,
    category: 'Sports & Outdoors',
    subcategory: 'Fitness',
    image: 'https://images.unsplash.com/photo-1592432678016-e910b452f9a2',
    rating: 4.5,
    reviews: 189,
    inStock: true
  },
  {
    id: 'so3',
    name: 'Camping Tent',
    description: '4-person waterproof camping tent',
    price: 199.99,
    category: 'Sports & Outdoors',
    subcategory: 'Camping',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'so4',
    name: 'Fitness Tracker',
    description: 'Water-resistant fitness tracker with heart rate monitor',
    price: 89.99,
    category: 'Sports & Outdoors',
    subcategory: 'Fitness',
    image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288',
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: 'so5',
    name: 'Golf Club Set',
    description: 'Complete golf club set with bag',
    price: 699.99,
    category: 'Sports & Outdoors',
    subcategory: 'Golf',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa',
    rating: 4.8,
    reviews: 145,
    inStock: true
  },

  // Beauty & Personal Care Products
  {
    id: 'bp1',
    name: 'Professional Hair Dryer',
    description: 'Ionic hair dryer with multiple heat settings',
    price: 79.99,
    category: 'Beauty & Personal Care',
    subcategory: 'Hair Care',
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'bp2',
    name: 'Skincare Set',
    description: 'Complete skincare routine set',
    price: 149.99,
    category: 'Beauty & Personal Care',
    subcategory: 'Skincare',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'bp3',
    name: 'Electric Toothbrush',
    description: 'Sonic electric toothbrush with multiple modes',
    price: 89.99,
    category: 'Beauty & Personal Care',
    subcategory: 'Oral Care',
    image: 'https://images.unsplash.com/photo-1629203851122-3726ecdf080e',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 'bp4',
    name: 'Makeup Brush Set',
    description: 'Professional makeup brush set with case',
    price: 49.99,
    category: 'Beauty & Personal Care',
    subcategory: 'Makeup',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: 'bp5',
    name: 'Perfume Collection',
    description: 'Luxury perfume gift set',
    price: 199.99,
    category: 'Beauty & Personal Care',
    subcategory: 'Fragrance',
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539',
    rating: 4.9,
    reviews: 189,
    inStock: true
  },

  // Books & Stationery Products
  {
    id: 'bs1',
    name: 'Leather Journal',
    description: 'Handcrafted leather journal with premium paper',
    price: 29.99,
    category: 'Books & Stationery',
    subcategory: 'Journals',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },
  {
    id: 'bs2',
    name: 'Fountain Pen Set',
    description: 'Luxury fountain pen set with ink bottles',
    price: 89.99,
    category: 'Books & Stationery',
    subcategory: 'Pens',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc36b9f',
    rating: 4.8,
    reviews: 145,
    inStock: true
  },
  {
    id: 'bs3',
    name: 'Art Supplies Kit',
    description: 'Professional art supplies set for artists',
    price: 149.99,
    category: 'Books & Stationery',
    subcategory: 'Art Supplies',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f',
    rating: 4.6,
    reviews: 189,
    inStock: true
  },
  {
    id: 'bs4',
    name: 'Planner Set',
    description: '2024 planner set with stickers and accessories',
    price: 39.99,
    category: 'Books & Stationery',
    subcategory: 'Planners',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d',
    rating: 4.7,
    reviews: 234,
    inStock: true
  },
  {
    id: 'bs5',
    name: 'Calligraphy Set',
    description: 'Complete calligraphy set for beginners',
    price: 59.99,
    category: 'Books & Stationery',
    subcategory: 'Calligraphy',
    image: 'https://images.unsplash.com/photo-1583485088034-697b5bc36b9f',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },

  // Gaming Products
  {
    id: 'gp1',
    name: 'Gaming Console Pro',
    description: 'Next-gen gaming console with 4K gaming support',
    price: 499.99,
    category: 'Gaming',
    subcategory: 'Consoles',
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128',
    rating: 4.9,
    reviews: 567,
    inStock: true
  },
  {
    id: 'gp2',
    name: 'Gaming Headset Elite',
    description: '7.1 surround sound gaming headset with RGB',
    price: 129.99,
    category: 'Gaming',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e',
    rating: 4.7,
    reviews: 289,
    inStock: true
  },
  {
    id: 'gp3',
    name: 'Gaming Mouse Pro',
    description: 'High-precision gaming mouse with customizable buttons',
    price: 79.99,
    category: 'Gaming',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db',
    rating: 4.8,
    reviews: 345,
    inStock: true
  },
  {
    id: 'gp4',
    name: 'Gaming Keyboard RGB',
    description: 'Mechanical gaming keyboard with RGB backlight',
    price: 149.99,
    category: 'Gaming',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1595225476473-7712d5f3b9c4',
    rating: 4.6,
    reviews: 234,
    inStock: true
  },
  {
    id: 'gp5',
    name: 'Gaming Chair Deluxe',
    description: 'Ergonomic gaming chair with lumbar support',
    price: 299.99,
    category: 'Gaming',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267',
    rating: 4.7,
    reviews: 178,
    inStock: true
  },

  // Pet Supplies
  {
    id: 'ps1',
    name: 'Smart Pet Feeder',
    description: 'Automated pet feeder with app control',
    price: 89.99,
    category: 'Pet Supplies',
    subcategory: 'Feeders',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 'ps2',
    name: 'Premium Dog Bed',
    description: 'Orthopedic dog bed with memory foam',
    price: 129.99,
    category: 'Pet Supplies',
    subcategory: 'Beds',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'ps3',
    name: 'Cat Tree Deluxe',
    description: 'Multi-level cat tree with scratching posts',
    price: 149.99,
    category: 'Pet Supplies',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'ps4',
    name: 'Pet GPS Tracker',
    description: 'GPS tracker for pets with activity monitoring',
    price: 79.99,
    category: 'Pet Supplies',
    subcategory: 'Accessories',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1',
    rating: 4.5,
    reviews: 145,
    inStock: true
  },
  {
    id: 'ps5',
    name: 'Automatic Litter Box',
    description: 'Self-cleaning litter box for cats',
    price: 299.99,
    category: 'Pet Supplies',
    subcategory: 'Litter Boxes',
    image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },

  // Musical Instruments
  {
    id: 'mi1',
    name: 'Electric Guitar Pro',
    description: 'Professional electric guitar with case',
    price: 699.99,
    category: 'Musical Instruments',
    subcategory: 'Guitars',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'mi2',
    name: 'Digital Piano',
    description: '88-key weighted digital piano',
    price: 899.99,
    category: 'Musical Instruments',
    subcategory: 'Pianos',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
    rating: 4.9,
    reviews: 345,
    inStock: true
  },
  {
    id: 'mi3',
    name: 'Professional Drum Set',
    description: 'Complete drum set with cymbals',
    price: 1299.99,
    category: 'Musical Instruments',
    subcategory: 'Drums',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'mi4',
    name: 'Violin Premium',
    description: 'Handcrafted violin with bow',
    price: 599.99,
    category: 'Musical Instruments',
    subcategory: 'Strings',
    image: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 'mi5',
    name: 'Saxophone Professional',
    description: 'Professional alto saxophone',
    price: 1499.99,
    category: 'Musical Instruments',
    subcategory: 'Wind',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },

  // Office Supplies
  {
    id: 'os1',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support',
    price: 249.99,
    category: 'Office Supplies',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'os2',
    name: 'Standing Desk',
    description: 'Electric height-adjustable standing desk',
    price: 399.99,
    category: 'Office Supplies',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'os3',
    name: 'Document Scanner',
    description: 'High-speed document scanner with OCR',
    price: 199.99,
    category: 'Office Supplies',
    subcategory: 'Electronics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'os4',
    name: 'Label Printer',
    description: 'Professional label printer with software',
    price: 149.99,
    category: 'Office Supplies',
    subcategory: 'Electronics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    rating: 4.5,
    reviews: 123,
    inStock: true
  },
  {
    id: 'os5',
    name: 'File Cabinet',
    description: '4-drawer metal file cabinet',
    price: 299.99,
    category: 'Office Supplies',
    subcategory: 'Storage',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
    rating: 4.7,
    reviews: 167,
    inStock: true
  },

  // Garden & Outdoor
  {
    id: 'go1',
    name: 'Smart Sprinkler System',
    description: 'WiFi-enabled sprinkler system with app control',
    price: 199.99,
    category: 'Garden & Outdoor',
    subcategory: 'Irrigation',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'go2',
    name: 'Garden Tool Set',
    description: 'Complete garden tool set with storage',
    price: 89.99,
    category: 'Garden & Outdoor',
    subcategory: 'Tools',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'go3',
    name: 'Outdoor Furniture Set',
    description: 'Weather-resistant outdoor furniture set',
    price: 599.99,
    category: 'Garden & Outdoor',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'go4',
    name: 'Garden Shed',
    description: 'Weatherproof garden storage shed',
    price: 399.99,
    category: 'Garden & Outdoor',
    subcategory: 'Storage',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 'go5',
    name: 'BBQ Grill Pro',
    description: 'Professional gas BBQ grill',
    price: 499.99,
    category: 'Garden & Outdoor',
    subcategory: 'Grills',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1',
    rating: 4.9,
    reviews: 289,
    inStock: true
  },

  // Baby Products
  {
    id: 'bp1',
    name: 'Smart Baby Monitor',
    description: 'WiFi baby monitor with night vision',
    price: 149.99,
    category: 'Baby Products',
    subcategory: 'Monitoring',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'bp2',
    name: 'Baby Stroller Deluxe',
    description: 'All-terrain baby stroller with storage',
    price: 299.99,
    category: 'Baby Products',
    subcategory: 'Strollers',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
    rating: 4.8,
    reviews: 234,
    inStock: true
  },
  {
    id: 'bp3',
    name: 'Baby Crib',
    description: 'Convertible baby crib with mattress',
    price: 399.99,
    category: 'Baby Products',
    subcategory: 'Furniture',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
    rating: 4.6,
    reviews: 167,
    inStock: true
  },
  {
    id: 'bp4',
    name: 'Baby Carrier',
    description: 'Ergonomic baby carrier with multiple positions',
    price: 79.99,
    category: 'Baby Products',
    subcategory: 'Carriers',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: 'bp5',
    name: 'Baby Food Maker',
    description: 'All-in-one baby food maker and blender',
    price: 129.99,
    category: 'Baby Products',
    subcategory: 'Feeding',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba',
    rating: 4.8,
    reviews: 189,
    inStock: true
  }
];

export const categories = [
  "Men's Clothing",
  "Men's Shoes",
  "Men's Accessories",
  "Men's Bags",
  "Men's Watches",
  "Women's Clothing",
  "Women's Shoes",
  "Women's Watches",
  "Women's Bags",
  "Women's Jewelry",
  "Smartphones",
  "Tablets",
  "Laptops",
  "Electronics",
  "Home & Kitchen",
  "Sports & Outdoors",
  "Beauty & Personal Care",
  "Books & Stationery",
  "Gaming",
  "Pet Supplies",
  "Musical Instruments",
  "Office Supplies",
  "Garden & Outdoor",
  "Baby Products"
];

export const subcategories = {
  "Men's Clothing": ['Shirts', 'Pants', 'Jackets', 'Sweaters', 'Polo Shirts'],
  "Men's Shoes": ['Formal Shoes', 'Athletic Shoes', 'Casual Shoes', 'Boots'],
  "Men's Accessories": ['Belts', 'Ties', 'Wallets', 'Eyewear', 'Gloves'],
  "Men's Bags": ['Messenger Bags', 'Backpacks', 'Duffel Bags', 'Briefcases', 'Crossbody Bags'],
  "Men's Watches": ['Automatic Watches', 'Smart Watches', 'Chronograph Watches', 'Diving Watches', 'Minimalist Watches'],
  "Women's Clothing": ['Dresses', 'Sweaters', 'Jeans', 'Tops', 'Skirts'],
  "Women's Shoes": ['Boots', 'Heels', 'Athletic Shoes', 'Flats', 'Sandals'],
  "Women's Watches": ['Luxury Watches', 'Smart Watches', 'Fashion Watches', 'Minimalist Watches'],
  "Women's Bags": ['Tote Bags', 'Crossbody Bags', 'Clutch Bags', 'Backpacks', 'Shoulder Bags'],
  "Women's Jewelry": ['Necklaces', 'Earrings', 'Bracelets', 'Rings', 'Pendants'],
  "Smartphones": ['Apple', 'Samsung', 'Google', 'OnePlus', 'Xiaomi'],
  "Tablets": ['Apple', 'Samsung', 'Microsoft', 'Amazon'],
  "Laptops": ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS'],
  "Electronics": ['Audio', 'Wearables', 'TVs', 'Cameras', 'Laptops'],
  "Home & Kitchen": ['Appliances', 'Cookware', 'Smart Home', 'Bedding'],
  "Sports & Outdoors": ['Cycling', 'Fitness', 'Camping', 'Golf'],
  "Beauty & Personal Care": ['Hair Care', 'Skincare', 'Oral Care', 'Makeup', 'Fragrance'],
  "Books & Stationery": ['Journals', 'Pens', 'Art Supplies', 'Planners', 'Calligraphy'],
  "Gaming": ['Consoles', 'Accessories', 'Furniture'],
  "Pet Supplies": ['Feeders', 'Beds', 'Furniture', 'Accessories', 'Litter Boxes'],
  "Musical Instruments": ['Guitars', 'Pianos', 'Drums', 'Strings', 'Wind'],
  "Office Supplies": ['Furniture', 'Electronics', 'Storage'],
  "Garden & Outdoor": ['Irrigation', 'Tools', 'Furniture', 'Storage', 'Grills'],
  "Baby Products": ['Monitoring', 'Strollers', 'Furniture', 'Carriers', 'Feeding']
}; 
export default [
  {
    name: 'All products',
    slug: '/catalog',
    featured: false,
    image: '',
    subcategories: [],
  },
  {
    name: 'Clothing',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-clothing/Clothing',
    subcategories: [
      {
        name: 'Shirts & Tops',
        description:
          'Create a professional look for everyone in your business. We offer a wide range of custom clothing, from casual T-shirts and polos to smart dress shirts.',
        slug: '/shirts-tops',

        subitems: [
          {
            name: 'T-shirts',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/t-shirts/clothing-t-shirts',
          },
          {
            name: 'Polo T-shirts',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/polo%20shirts/clothing-polo-shirts',
          },
          {
            name: 'Dress Shirts',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/dress%20shirts/clothing-dress-shirts',
          },
          {
            name: 'Tank Tops',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Outerwear',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Jackets',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/jackets/clothing-jackets',
          },
          {
            name: 'WindBreakers',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/jumpers/clothing-jumpers',
          },
          {
            name: 'Sweatshirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            slug: '/tops',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/jumpers/clothing-jumpers',
          },
          {
            name: 'Fleeness & knits',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/fleeces%20knits/clothing-fleeces-knits',
          },
          {
            name: 'Vests',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/vests/clothing-vests',
          },
        ],
      },
      {
        name: 'Hats',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Baseball caps',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/baseball%20caps/clothing-baseball-caps',
          },
          {
            name: 'Knitted Hats',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            slug: '/tops',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/baseball%20caps/clothing-baseball-caps',
          },
        ],
      },
      {
        name: 'Outer Clothing',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Trousers & Shorts',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/baby%20clothing/clothing-baby-clothing',
          },
          {
            name: 'Baby Clothing',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/baby%20clothing/clothing-baby-clothing',
          },
          {
            name: 'Clothing Accessories',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
            image:
              'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,q_70,w_auto:50:450/site%20images/category%20pages/clothing/baby%20clothing/clothing-baby-clothing',
          },
        ],
      },
    ],
  },
  {
    name: 'Bags',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-bags/Bags',
    subcategories: [
      {
        name: 'Totes',
        slug: '/shirts-tops',

        subitems: [],
      },
      {
        name: 'Back packs',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Traditional Backpacks',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Drowstring Bags',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Gym and Travel Bags',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Duffle & Gym Bags',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Luggage',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Business Bags',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Brief Cases',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Messeger Bags',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Laptop & Tablet Bags',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },

      {
        name: 'Paper  Bags',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Paper Bags',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Lunch Bags & Coolers',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Coolers',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
    ],
  },
  {
    name: 'Drinkware',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-drinkware',
    subcategories: [
      {
        name: 'Mugs',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Sport & Water Bottles',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Travel Mugs & Tumbles',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Travel Mugs',
            slug: '/t-shirts',
          },
          {
            name: 'Tumbers',
            slug: '/tops',
          },
          {
            name: 'Stylus',
            slug: '/tops',
          },
          {
            name: 'Markers & Highlighters',
            slug: '/tops',
          },
          {
            name: 'Writing & Colouring sets',
            slug: '/tops',
          },
        ],
      },
      {
        name: 'Reusable Straws',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Cups',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Promotional Cups',
            slug: '/t-shirts',
          },
          {
            name: 'Cups with straws',
            slug: '/tops',
          },
        ],
      },
      {
        name: 'Gift Sets',
        slug: '/shirts-tops',
        subitems: [],
      },
    ],
  },
  {
    name: 'Writing & office',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/image/upload/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-writing',
    subcategories: [
      {
        name: 'Writing',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Pens',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Pencils',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Stylus',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Markers & Highlighters',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Writing & Colouring sets',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Office',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Padfolio & Notebook',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Sticky Notes',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Stress Relievers',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Desk Accessories',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Badge Holders & Lanyards',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Clocks & Watches',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
    ],
  },
  {
    name: 'Technology',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-technology/Technology',
    subcategories: [
      {
        name: 'USB Flash Drives',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Mouse Pads',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Chargers',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Charger & Powerbank',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Wireless Chargers',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Charging Cables',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Audio',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Earphones',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Speakers',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Headphones',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Accessories',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Mobile Phone Accessories',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Electronic Accessories',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
    ],
  },
  {
    name: 'Household & auto',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-house/Home',
    subcategories: [
      {
        name: 'KeyChains',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Home & Personal Care',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Housewares',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Beauty and Bath',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Health Care',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Blankets',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Bench Items',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'BBQ and Picnic',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Auto & Tools',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Tools',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Car Accessories',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Torches & Lights',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
    ],
  },
  {
    name: 'Sports & Leisure',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-sport/Leisure',
    subcategories: [
      {
        name: 'Outdoor',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Umbrella & Ponchos',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Sunglasses',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Games & Toys',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Blankets',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Bench Items',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'BBQ and Picnic',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Travel',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Travel Essentials',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Luggage',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
      {
        name: 'Sports & Fitness',
        slug: '/shirts-tops',
        subitems: [
          {
            name: 'Towels',
            slug: '/t-shirts',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
          {
            name: 'Sports & Fitness',
            slug: '/tops',
            description:
              'Protect yourself from the elements with our range of custom jackets.',
          },
        ],
      },
    ],
  },
  {
    name: 'Treats',
    slug: '/catalog',
    featured: true,
    image:
      'https://res.cloudinary.com/promotique/images/c_scale,dpr_auto,f_auto,w_auto:50:411/site%20images/homepage/hp-tile-candy/Candy',
    subcategories: [
      {
        name: 'Candy',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Chocolate',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Snacks',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Garment Gifts',
        slug: '/shirts-tops',
        subitems: [],
      },
    ],
  },
  {
    name: 'Deals',
    slug: '/catalog',
    featured: false,
    image: '',
    subcategories: [],
  },
  {
    name: 'Collections',
    slug: '/catalog',
    featured: false,
    image: '',
    subcategories: [
      {
        name: 'No minimums',
        slug: '/shirts-tops',
        subitems: [],
      },
      {
        name: 'Standard Shipping Products',
        slug: '/shirts-tops',
        subitems: [],
      },
    ],
  },
];

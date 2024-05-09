const data = {
  laptops: {
    '215840': {
      brand: 'Apple',
      color: ['Gray'],
      description: 'For professionals seeking unparalleled performance, the MacBook Pro is the answer. With a 16-inch Retina display, 512GB storage, and a sleek Space Gray design, it\'s built to handle your most demanding tasks with ease.',
      id: 215840,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/ada7178e-5527-4789-b896-4911ab21420e-1_f11688cd-7f56-4711-b499-44128aa78c08.jpg',
      model: 'MacBook Pro',
      price: 700,
      size: '16 inches',
      storage: '512GB'
    },
    '376952': {
      brand: 'Lenovo',
      color: ['Silver', 'Gray'],
      description: 'Unleash your productivity with the Lenovo Ideapad 5. This sleek laptop features a 15.6-inch display, a spacious 512GB SSD, and a stylish Silver and Gray color scheme. Whether for work or entertainment, it\'s a reliable companion.',
      id: 376952,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/177f1502-4ad1-4ce2-a0bb-2c4878d15260-1_31960ec3-0697-4f6c-b9d0-9750c9434646.jpg',
      model: 'IdeaPad 3',
      price: 600,
      size: '15.6 inches',
      storage: '512GB'
    },
    '490158': {
      brand: 'Lenovo',
      color: ['Black'],
      description: 'Experience premium computing with the Lenovo ThinkPad X1 Carbon. With a 14-inch display, a massive 1TB storage, and a sleek Black design, it\'s designed for professionals who demand top-notch performance and style.',
      id: 490158,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/776f1bad-9df9-4f4b-a6a3-44b9de1851cd-1_8988d570-da3e-4458-bd83-f21fb4c36152.jpg',
      model: 'ThinkPad X1',
      price: 254,
      size: '14 inches',
      storage: '1TB'
    },
    '673219': {
      brand: 'Dell',
      color: ['Gold', 'White'],
      description: 'Immerse yourself in the Dell XPS 13 experience. This laptop boasts a 13.4-inch display, 512GB of storage, and a sleek Rose Gold or Arctic White design. Elevate your computing with Dell\'s premium craftsmanship.',
      id: 673219,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/5e0191e5-9ac0-446a-9240-94e31db435cd-1_57024823-0ee0-4bc3-8c7c-b2753d5c1da9.jpg',
      model: 'XPS 13',
      price: 425,
      size: '13.4 inches',
      storage: '512GB'
    },
    '824713': {
      brand: 'Apple',
      color: ['Gold', 'Silver', 'Gray'],
      description: 'Thin, light, and powerful, the MacBook Air is Apple\'s iconic laptop. Featuring a 13-inch Retina display, 256GB of storage, and a stunning Gold, Silver, or Space Gray finish, it\'s the ultimate choice for portable computing.',
      id: 824713,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/b5ebc79d-0304-41a6-b1ae-d2a487afa11f-1_3a6e2d54-9925-4f83-b068-6e260b422d89.jpg',
      model: 'MacBook Air',
      price: 600,
      size: '13 inches',
      storage: '256GB'
    },
    '981364': {
      brand: 'HP',
      color: ['Black', 'Blue'],
      description: 'Experience the versatility of the HP Spectre x360. With a 15.6-inch display, 1TB storage, and Nightfall Black or Poseidon Blue color options, it adapts to your lifestyle while delivering top-notch performance.',
      id: 981364,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/dc536017-d170-470a-abf2-c9883397e3f3-1_c440186b-d2d6-4b4d-b2d3-2b9ead51c977.jpg',
      model: 'Spectre x360',
      price: 700,
      size: '15.6 inches',
      storage: '1TB'
    }
  },
  smartPhones: {
    '215840': {
      brand: 'Apple',
      camera: '12 Megapixels',
      color: ['Black', 'White', 'RED'],
      description: 'Compact yet powerful, the iPhone SE delivers incredible performance. With a 4.7-inch Retina HD display, a 12MP camera, and 64GB of storage, it\'s perfect for those who prefer a smaller form factor. Choose from classic colors like Black, White, and Product(RED).',
      id: 215840,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/00649b5d-1b02-4259-b280-52bea1cc8c4e-1_de9fd18e-33b8-4c7d-a05f-57a0e92f4b62.jpg',
      model: 'iPhone SE',
      price: 120,
      screen: '4.7 inches',
      storage: '64GB'
    },
    '376952': {
      brand: 'Samsung',
      camera: '64 Megapixels',
      color: ['Gray', 'White', 'Pink'],
      description: 'Experience the future with the Samsung Galaxy S21. This flagship smartphone boasts a stunning 6.2-inch screen, a powerful 64MP camera, and 128GB of storage. Its sleek design and Phantom color options make it a standout choice.',
      id: 376952,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/e96c97b5-2dec-4218-972a-dfd967979e49-1_fc51c9f2-41b2-4dbc-a307-0bb48754ccb5.jpg',
      model: 'Galaxy S21',
      price: 196,
      screen: '6.2 inches',
      storage: '128GB'
    },
    '490158': {
      brand: 'Samsung',
      camera: '108 Megapixels',
      color: ['Bronze', 'Black', 'Green'],
      description: 'Elevate your mobile experience with the Samsung Galaxy Note 20. With a massive 6.7-inch screen, a cutting-edge 108MP camera, and 256GB of storage, it\'s a powerhouse for productivity and creativity. Choose from Mystic Bronze, Black, or Green.',
      id: 490158,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/cb828ac5-540a-4221-baed-d37dcc0890c9-1_5c4ec151-9379-4c6f-a196-d52b7e6d7c48.jpg',
      model: 'Galaxy Note 20',
      price: 500,
      screen: '6.7 inches',
      storage: '256GB'
    },
    '673219': {
      brand: 'Huawei',
      camera: '50 Megapixels',
      color: ['Black', 'Silver', 'Green'],
      description: 'Experience innovation with the Huawei Mate 40. This smartphone features a 6.5-inch display, a powerful 50MP camera, and 256GB of storage. Choose from stylish colors like Black, Silver, and Green.',
      id: 673219,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/44602047-fc0c-48f0-b11b-d3cb11b023e6-1_c93dedbd-2b12-46dc-b057-2de0c860e435.jpg',
      model: 'Mate 20',
      price: 109,
      screen: '6.5 inches',
      storage: '256GB'
    },
    '824713': {
      brand: 'Apple',
      camera: '12 Megapixels',
      color: ['Silver', 'Gold', 'Blue'],
      description: 'Introducing the iPhone 12, Apple\'s latest masterpiece. With a 6.1-inch Super Retina XDR display, a powerful 12MP camera system, and 256GB of storage, it sets a new standard for smartphones. Choose from stunning colors like Graphite, Silver, Gold, and Pacific Blue.',
      id: 824713,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/f494a8a4-ef58-4a1c-9495-a64d21fed02f-1_47e675fb-3ab7-412f-a467-eb16ef9bb267.jpg',
      model: 'iPhone 12',
      price: 250,
      screen: '6.1 inches',
      storage: '256GB'
    },
    '981364': {
      brand: 'Xiaomi',
      camera: '108 Megapixels',
      color: ['Blue', 'White', 'Black'],
      description: 'Discover the Xiaomi Mi 11, a smartphone that pushes boundaries. With a 108MP camera, a 6.81-inch display, and 128GB of storage, it\'s a perfect blend of style and performance. Available in Blue, White, and Black.',
      id: 981364,
      img: 'https://d2e6ccujb3mkqf.cloudfront.net/ecc0d57f-3970-4744-afa0-267d9cf5c443-1_3c3ca2f1-db32-49e5-be6d-2d243aa116aa.jpg',
      model: 'Mi 11',
      price: 150,
      screen: '6.81 inches',
      storage: '128GB'
    }
  }
}

const imageUrls = [
  "https://images.ctfassets.net/mmeshd7gafk1/7KNLXyQymHYYkmyLiDbbwN/b4a2d7a9ddb37e38b45d11fd9a070f0a/TRADEIN_HP_GENERICBANNERS_DESKTOP_1_UK.jpg",
  "https://images.ctfassets.net/mmeshd7gafk1/1mklc1XS5bIPxK0yRUSWlC/38ddeaf73378f38400bfda50f76d3760/HP_Desktop.jpg",
  "https://images.ctfassets.net/mmeshd7gafk1/79rdnKQoRxpSz5XweedLXe/ae73600c79066d5667e32f16009dbf08/banner_hp_en-uk_desktop_2880_hdpi.png",
];

export { data, imageUrls };

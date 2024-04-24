const data = {
    smartPhones: {
      models: [
        {
          id: "s1",
          brand: "Samsung",
          model: "Galaxy S21",
          price: 196,
          color: [
            "Phantom Gray",
            "Phantom White",
            "Phantom Violet",
            "Phantom Pink",
          ],
          storage: "128GB",
          camera: "64 Megapixels",
          screen: "6.2 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/e96c97b5-2dec-4218-972a-dfd967979e49-1_fc51c9f2-41b2-4dbc-a307-0bb48754ccb5.jpg",
          description:
            "Experience the future with the Samsung Galaxy S21. This flagship smartphone boasts a stunning 6.2-inch screen, a powerful 64MP camera, and 128GB of storage. Its sleek design and Phantom color options make it a standout choice.",
        },
        {
          id: "s2",
          brand: "Samsung",
          model: "Galaxy Note 20",
          price: 500,
          color: ["Mystic Bronze", "Mystic Black", "Mystic Green"],
          storage: "256GB",
          camera: "108 Megapixels",
          screen: "6.7 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/cb828ac5-540a-4221-baed-d37dcc0890c9-1_5c4ec151-9379-4c6f-a196-d52b7e6d7c48.jpg",
          description:
            "Elevate your mobile experience with the Samsung Galaxy Note 20. With a massive 6.7-inch screen, a cutting-edge 108MP camera, and 256GB of storage, it's a powerhouse for productivity and creativity. Choose from Mystic Bronze, Black, or Green.",
        },
        {
          id: "a1",
          brand: "Apple",
          model: "iPhone 12",
          price: 250,
          color: ["Graphite", "Silver", "Gold", "Pacific Blue"],
          storage: "256GB",
          camera: "12 Megapixels",
          screen: "6.1 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/f494a8a4-ef58-4a1c-9495-a64d21fed02f-1_47e675fb-3ab7-412f-a467-eb16ef9bb267.jpg",
          description:
            "Introducing the iPhone 12, Apple's latest masterpiece. With a 6.1-inch Super Retina XDR display, a powerful 12MP camera system, and 256GB of storage, it sets a new standard for smartphones. Choose from stunning colors like Graphite, Silver, Gold, and Pacific Blue.",
        },
        {
          id: "a2",
          brand: "Apple",
          model: "iPhone SE",
          price: 120,
          color: ["Black", "White", "Product(RED)"],
          storage: "64GB",
          camera: "12 Megapixels",
          screen: "4.7 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/00649b5d-1b02-4259-b280-52bea1cc8c4e-1_de9fd18e-33b8-4c7d-a05f-57a0e92f4b62.jpg",
          description:
            "Compact yet powerful, the iPhone SE delivers incredible performance. With a 4.7-inch Retina HD display, a 12MP camera, and 64GB of storage, it's perfect for those who prefer a smaller form factor. Choose from classic colors like Black, White, and Product(RED).",
        },
        {
          id: "h1",
          brand: "Huawei",
          model: "Mate 20",
          price: 109,
          color: ["Black", "Silver", "Green"],
          storage: "256GB",
          camera: "50 Megapixels",
          screen: "6.5 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/44602047-fc0c-48f0-b11b-d3cb11b023e6-1_c93dedbd-2b12-46dc-b057-2de0c860e435.jpg",
          description:
            "Experience innovation with the Huawei Mate 40. This smartphone features a 6.5-inch display, a powerful 50MP camera, and 256GB of storage. Choose from stylish colors like Black, Silver, and Green.",
        },
        {
          id: "xia1",
          brand: "Xiaomi",
          model: "Mi 11",
          price: 150,
          color: ["Blue", "White", "Black"],
          storage: "128GB",
          camera: "108 Megapixels",
          screen: "6.81 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/ecc0d57f-3970-4744-afa0-267d9cf5c443-1_3c3ca2f1-db32-49e5-be6d-2d243aa116aa.jpg",
          description:
            "Discover the Xiaomi Mi 11, a smartphone that pushes boundaries. With a 108MP camera, a 6.81-inch display, and 128GB of storage, it's a perfect blend of style and performance. Available in Blue, White, and Black.",
        },
      ],
    },
    laptops: {
      models: [
        {
          id: "l1",
          brand: "Lenovo",
          model: "IdeaPad 3",
          price: 600,
          color: ["Silver", "Gray"],
          storage: "512GB",
          size: "15.6 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/177f1502-4ad1-4ce2-a0bb-2c4878d15260-1_31960ec3-0697-4f6c-b9d0-9750c9434646.jpg",
          description:
            "Unleash your productivity with the Lenovo Ideapad 5. This sleek laptop features a 15.6-inch display, a spacious 512GB SSD, and a stylish Silver and Gray color scheme. Whether for work or entertainment, it's a reliable companion.",
        },
        {
          id: "l2",
          brand: "Lenovo",
          model: "ThinkPad X1",
          price: 254,
          color: ["Black"],
          storage: "1TB",
          size: "14 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/776f1bad-9df9-4f4b-a6a3-44b9de1851cd-1_8988d570-da3e-4458-bd83-f21fb4c36152.jpg",
          description:
            "Experience premium computing with the Lenovo ThinkPad X1 Carbon. With a 14-inch display, a massive 1TB storage, and a sleek Black design, it's designed for professionals who demand top-notch performance and style.",
        },
        {
          id: "ap1",
          brand: "Apple",
          model: "MacBook Air",
          price: 600,
          color: ["Gold", "Silver", "Space Gray"],
          storage: "256GB",
          size: "13 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/b5ebc79d-0304-41a6-b1ae-d2a487afa11f-1_3a6e2d54-9925-4f83-b068-6e260b422d89.jpg",
          description:
            "Thin, light, and powerful, the MacBook Air is Apple's iconic laptop. Featuring a 13-inch Retina display, 256GB of storage, and a stunning Gold, Silver, or Space Gray finish, it's the ultimate choice for portable computing.",
        },
        {
          id: "ap2",
          brand: "Apple",
          model: "MacBook Pro",
          price: 700,
          color: ["Space Gray"],
          storage: "512GB",
          size: "16 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/ada7178e-5527-4789-b896-4911ab21420e-1_f11688cd-7f56-4711-b499-44128aa78c08.jpg",
          description:
            "For professionals seeking unparalleled performance, the MacBook Pro is the answer. With a 16-inch Retina display, 512GB storage, and a sleek Space Gray design, it's built to handle your most demanding tasks with ease.",
        },
        {
          id: "d1",
          brand: "Dell",
          model: "XPS 13",
          price: 425,
          color: ["Rose Gold", "Arctic White"],
          storage: "512GB",
          size: "13.4 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/5e0191e5-9ac0-446a-9240-94e31db435cd-1_57024823-0ee0-4bc3-8c7c-b2753d5c1da9.jpg",
          description:
            "Immerse yourself in the Dell XPS 13 experience. This laptop boasts a 13.4-inch display, 512GB of storage, and a sleek Rose Gold or Arctic White design. Elevate your computing with Dell's premium craftsmanship.",
        },
        {
          id: "hp1",
          brand: "HP",
          model: "Spectre x360",
          price: 700,
          color: ["Nightfall Black", "Poseidon Blue"],
          storage: "1TB",
          size: "15.6 inches",
          img: "https://d2e6ccujb3mkqf.cloudfront.net/dc536017-d170-470a-abf2-c9883397e3f3-1_c440186b-d2d6-4b4d-b2d3-2b9ead51c977.jpg",
          description:
            "Experience the versatility of the HP Spectre x360. With a 15.6-inch display, 1TB storage, and Nightfall Black or Poseidon Blue color options, it adapts to your lifestyle while delivering top-notch performance.",
        },
      ],
    },
  };
  
  export { data };
  
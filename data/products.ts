import { Product } from "../models/product";

export const products: Product[] = [
  {
    id: "1",
    name: "T-shirt",
    description:
      "The Medusa T-shirt is made from a heavyweight, overdyed jersey, featuring contrasting mesh panels on each side that match the logo embroidery on the back.",
    price: 350,
    imageUrl: "/tshirt.svg",
    collection: "summer",
    variants: [
      { id: "1s", name: "Small" },
      { id: "1m", name: "Medium" },
      { id: "1l", name: "Large" },
    ],
  },
  {
    id: "2",
    name: "T-shirt",
    description:
      "The Medusa T-shirt is made from a heavyweight, overdyed jersey, featuring contrasting mesh panels on each side that match the logo embroidery on the back.",
    price: 350,
    imageUrl: "/tshirt.svg",
    collection: "summer",
  },
];

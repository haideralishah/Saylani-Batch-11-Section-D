export type ProductItemType = {
  id: number;
  name: string;
  price: number;
  category:
    | "All"
    | "Cars"
    | "Mobile Phones"
    | "Gadgets"
    | "Computers"
    | "Cloths";
};

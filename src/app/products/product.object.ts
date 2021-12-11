export interface Product{
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export const PRODUCTS: Product[] = [
    {id: 1, name: 'Nike', imageUrl: '../assets/img.jfif', price: 1800, description: "This is brand New Nike. Do you want to order it? there is no lorem ipsom here."},
    {id: 2, name: 'Puma', imageUrl: '../assets/img2.jfif', price: 2000, description: "This is brand New Puma. Do you want ot order it? there is no lorem ipsom here."},
    {id: 3, name: 'Skechers', imageUrl: '../assets/img3.jfif', price: 2000, description: "This is brand New Sketcher. Do you want to order it? there is no lorem ipsom here."},
    {id: 4, name: 'Adidas', imageUrl: '../assets/img4.jfif', price: 1000, description: "This is brand New Adidas. Do you want to order it? there is no lorem ipsom here."},
    {id: 5, name: 'Reebok', imageUrl: '../assets/img5.jfif', price: 1500, description: "This is brand New Reebok. Do you want to order it? there is no lorem ipsom here."},
    {id: 6, name: 'Jordan', imageUrl: '../assets/img6.jfif', price: 2700, description: "This is brand New Jordan. Do you want to order it? there is no lorem ipsom here."}
];
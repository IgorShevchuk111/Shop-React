export interface Data {
    laptops: LaptopData;
    smartPhones: SmartPhoneData;
}
interface LaptopData {
    [key: string]: {
        brand: string;
        color: string[];
        description: string;
        id: number;
        img: string;
        model: string;
        price: number;
        size: string;
        storage: string;
    };
}
interface SmartPhoneData {
    [key: string]: {
        brand: string;
        camera: string;
        color: string[];
        description: string;
        id: number;
        img: string;
        model: string;
        price: number;
        screen: string;
        storage: string;
    };
}
export interface FilterData {
    brands: string[];
    models: string[];
    colors: string[];
}
export interface LinkComponentProps {
    to: string;
    text: string;
    className: string;
    key?: string;
    handleClose?: () => void;
}
export interface SidebarProps {
    category: string | undefined;
    handleCheckboxChange: (value: string, category: keyof FilterData) => void;
    filters: FilterData;
}
export interface SidebarFilterProps {
    category: keyof FilterData;
    items: string[];
    title: string;
    filters: FilterData;
    handleCheckboxChange: (value: string, category: keyof FilterData) => void;
}
export interface Product {
    brand: string;
    color: string[];
    description: string;
    id: number;
    img: string;
    model: string;
    price: number;
    size: string;
    storage: string;
}
export interface Laptop extends Product {
    size: string;
}
export interface Smartphone extends Product {
    camera: string;
    screen: string;
}
export type AnyProduct = Laptop | Smartphone;

export interface GalleryCarouselProps {
    models: Smartphone[] | Laptop[];
}
export interface ArrowProps {
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
}
export interface ProductCardProps {
    item: AnyProduct;
}
export interface ProductsProps {
    filteredProducts: AnyProduct[];
}
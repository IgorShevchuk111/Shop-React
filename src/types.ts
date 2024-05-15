export interface LinkComponentProps {
    to: string;
    text: string;
    className: string;
    key?: string;
    handleClose?: () => void;
}
export interface Laptop {
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

export interface Smartphone {
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
}

export interface GalleryCarouselProps {
    models: Smartphone[] | Laptop[];
}

export interface ArrowProps {
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
}

export interface ProductCardProps {
    model: Smartphone | Laptop;
}
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
export interface LinkComponentProps {
    to: string;
    text: string;
    className: string;
    key?: string;
    handleClose?: () => void;
}
export interface SearchProps {
    placeholder: string;
    handleInputChange?: (value: string) => void;
    title?: string;
}
export interface SidebarProps {
    category?: string;
    handleCheckboxChange: (value: string, category: 'brands' | 'models' | 'colors') => void;
    selectedBrands: string[];
    selectedModels: string[];
    selectedColors: string[];
    handleInputChange: (value: string) => void;
    handlePriceChange: (minValue: number, maxValue: number) => void;
}
export interface SidebarFilterProps {
    handleInputChange?: (value: string) => void;
    category: 'brands' | 'models' | 'colors';
    title: string;
    handleCheckboxChange: (value: string, category: 'brands' | 'models' | 'colors') => void;
    selectedItems: string[];
    items: string[];
}

export interface SidebarListItemsProps {
    handleCheckboxChange: (
        value: string,
        category: 'brands' | 'models' | 'colors'
    ) => void;
    selectedItems: string[];
    items: string[];
    category: 'brands' | 'models' | 'colors'
}
export interface SidebarItemProps {
    category: 'brands' | 'models' | 'colors';
    selectedItems: string[];
    handleCheckboxChange: (
        value: string,
        category: 'brands' | 'models' | 'colors'
    ) => void;
    value: string;
}
export interface Product {
    brand: string;
    color: string[];
    description: string;
    id: number;
    img: string;
    model: string;
    price: number;
    storage: string;
    quantity?: number;
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
    models: AnyProduct[];
    category: string
}
export interface ArrowProps {
    onClick?: () => void;
    currentSlide?: number;
    slideCount?: number;
}
export interface ProductCardProps {
    item: AnyProduct;
    category?: string;
}
export interface ProductsProps {
    filteredProducts: AnyProduct[];
}
export interface MultiRangeSliderType {
    max: number;
    maxValue: number;
    min: number;
    minValue: number;
}

export interface UsedSmartphonesSectionProps {
    handleSortByChange: (value: string) => void;
}

export interface SortByDropdownProps {
    handleSortByChange: (value: string) => void;
}

export interface RangeSliderProps {
    handlePriceChange: (minValue: number, maxValue: number) => void;
    category: 'itemPrice';

}
export interface ItemDetailsProps {
    [item: string]: AnyProduct;
}
// ------- Contexts --------

export interface ButtonProps {
    title: string;
    item: AnyProduct;
}

export interface ItemCardProps {
    item: AnyProduct;
    isHorizontal?: boolean;
}
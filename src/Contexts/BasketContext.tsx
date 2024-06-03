import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from 'react';
import { AnyProduct } from '../types';

export interface BasketProviderProps {
	children: ReactNode;
}

export interface BasketContextType {
	basketItems: AnyProduct[];
	setBasketItems: Dispatch<SetStateAction<AnyProduct[]>>;
}

const BasketContext = createContext<BasketContextType | undefined>(undefined);

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
	const [basketItems, setBasketItems] = useState<AnyProduct[]>([]);

	return (
		<BasketContext.Provider
			value={{
				basketItems,
				setBasketItems,
			}}
		>
			{children}
		</BasketContext.Provider>
	);
};

export default BasketContext;

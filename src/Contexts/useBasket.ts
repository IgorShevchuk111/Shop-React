import { useContext } from 'react';
import BasketContext from './BasketContext';

const useBasket = () => {
    const context = useContext(BasketContext);
    if (!context) {
        throw new Error('useBasket must be used within a BasketProvider');
    }
    return context;
};

export default useBasket;
import Logo from '../../components/Header/components/Logo';
import BasketItems from './components/BasketItems/BasketItems';
import './BasketPage.scss';
import HeaderBasketPage from './components/HeaderBasketPage/HeaderBasketPage';
import BasketPageContainer from './components/BasketPageContainer/BasketPageContainer';
import BasketSummaryContainer from './components/BasketSummaryContainer/BasketSummaryContainer';
import SummaryItemsContainer from './components/SummaryItemsContainer/SummaryItemsContainer';
import TotalPrice from './components/TotalPrice';
import CheckoutButton from './components/CheckoutButton/CheckoutButton';
import ProtectionPolicy from './components/ProtectionPolicy/ProtectionPolicy';
import PaymentMethods from './components/PaymentMethods';
import { useEffect, useState } from 'react';
import useBasket from '../../Contexts/useBasket';

function BasketPage() {
	const { basketItems } = useBasket();

	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (basketItems && basketItems.length > 0) {
			const newTotalPrice = basketItems.reduce(
				(total, item) => total + item.price * (item.quantity ?? 1),
				0
			);
			setTotalPrice(newTotalPrice);
		} else {
			setTotalPrice(0);
		}
	}, [basketItems]);
	return (
		<>
			<HeaderBasketPage>
				<Logo />
			</HeaderBasketPage>
			<BasketPageContainer>
				<BasketItems />
				<BasketSummaryContainer>
					<SummaryItemsContainer basketItems={basketItems}>
						<TotalPrice totalPrice={totalPrice} />
						<CheckoutButton />
						<ProtectionPolicy />
						<PaymentMethods />
					</SummaryItemsContainer>
				</BasketSummaryContainer>
			</BasketPageContainer>
		</>
	);
}

export default BasketPage;

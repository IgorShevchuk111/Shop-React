import { PropsWithChildren } from 'react';
import './HeaderBasketPage.scss';

function HeaderBasketPage({ children }: PropsWithChildren) {
	return <div className="basket-logo ">{children}</div>;
}

export default HeaderBasketPage;

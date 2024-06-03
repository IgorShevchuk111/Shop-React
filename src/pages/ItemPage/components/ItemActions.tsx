import React, { PropsWithChildren } from 'react';

const ItemActions: React.FC<PropsWithChildren> = ({ children }) => (
	<div className="d-flex justify-content-between">{children}</div>
);

export default ItemActions;

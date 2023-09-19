import { FC } from 'react';
import type { ProductType } from './typings';

interface IProductProps {
	product: ProductType;
}

const Product: FC<IProductProps> = ({ product: { id, title, description, date, isFeatured } }) => (
	<li key={id}>
		<h3>{title}</h3>
		<p>{description}</p>
		<p>
			{date} - {isFeatured ? 'featured' : 'unfeatured'}
		</p>
	</li>
);

export default Product;

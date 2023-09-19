import { FC } from 'react';
import Image from './image';

export interface IProduct {
	id: string;
	title: string;
	price: number;
	image: string;
}

interface IProductProps {
	product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {
	const { id, title, price, image } = product;
	return (
		<div key={id}>
			<p>
				{title}-{price}
			</p>
			{/* <Image product={product} /> */}
			<Image imageUrl={image} />
		</div>
	);
};

export default Product;

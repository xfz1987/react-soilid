import { FC } from 'react';
// import type { IProduct } from '.';

interface IImageProps {
	// product: IProduct;
	imageUrl: string;
}

const Image: FC<IImageProps> = ({ imageUrl }) => (
	<img
		// src={product.image}
		src={imageUrl}
		alt="product image"
	/>
);

export default Image;

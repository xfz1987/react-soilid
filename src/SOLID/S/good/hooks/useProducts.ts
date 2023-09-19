import { useEffect, useState } from 'react';
import data from '../../mock';
import type { Products } from '../typings';

export const useProducts = () => {
	const [products, setProducts] = useState<Products>([]);

	const fetchProducts = async () => {
		const getMockData = (): Promise<Products> => new Promise(resolve => setTimeout(() => resolve(data), 0));
		const response = await getMockData();
		setProducts(response);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return { products };
};

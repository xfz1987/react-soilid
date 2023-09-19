import { useState, useMemo, useEffect, ChangeEvent } from 'react';
import data from '../mock';

type Products = typeof data;

export default function Bad() {
	const [products, setProducts] = useState<Products>([]);
	const [filterFeatured, setFilterFeatured] = useState(true);

	const fetchProducts = async () => {
		const getMockData = (): Promise<Products> => new Promise(resolve => setTimeout(() => resolve(data), 0));
		const response = await getMockData();
		setProducts(response);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	const toggleFeatured = (e: ChangeEvent<HTMLSelectElement>) => {
		e.preventDefault();
		setFilterFeatured(e.target.value === '1');
	};

	const filteredProducts = useMemo(
		() => products.filter((product: Products[0]) => product.isFeatured === filterFeatured),
		[products, filterFeatured]
	);

	return (
		<>
			<div>
				<select
					value={filterFeatured ? '1' : '0'}
					onChange={toggleFeatured}
				>
					<option value="0">unfeatured</option>
					<option value="1">featured</option>
				</select>
			</div>
			<ul>
				{filteredProducts.map(({ id, title, description, date, isFeatured }) => (
					<li key={id}>
						<h3>{title}</h3>
						<p>{description}</p>
						<p>
							{date} - {isFeatured ? 'featured' : 'unfeatured'}
						</p>
					</li>
				))}
			</ul>
		</>
	);
}

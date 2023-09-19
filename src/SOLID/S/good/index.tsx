import Product from './product';
import Filter, { filterProducts } from './filter';
import { useProducts } from './hooks/useProducts';
import { useFeaturedFitler } from './hooks/useFeaturedFitler';

export default function Good() {
	const { products } = useProducts();
	const { filterFeatured, toggleFeatured } = useFeaturedFitler();

	return (
		<>
			<Filter
				filterFeatured={filterFeatured}
				toggleFeatured={toggleFeatured}
			/>
			<ul>
				{filterProducts(products, filterFeatured).map(product => (
					<Product product={product} />
				))}
			</ul>
		</>
	);
}

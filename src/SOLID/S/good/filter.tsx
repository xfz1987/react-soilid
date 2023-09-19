import { ChangeEvent, FC } from 'react';
import type { Products } from './typings';

export const filterProducts = (products: Products, isFeatured: boolean) =>
	products.filter(product => product.isFeatured === isFeatured);

interface IFilterProps {
	filterFeatured: boolean;
	toggleFeatured: (isFeatured: string) => void;
}

const Filter: FC<IFilterProps> = ({ filterFeatured, toggleFeatured }) => {
	return (
		<div>
			<select
				value={filterFeatured ? '1' : '0'}
				onChange={(e: ChangeEvent<HTMLSelectElement>) => {
					e.preventDefault();
					toggleFeatured(e.target.value);
				}}
			>
				<option value="0">unfeatured</option>
				<option value="1">featured</option>
			</select>
		</div>
	);
};

export default Filter;

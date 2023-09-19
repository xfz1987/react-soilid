import { FC, InputHTMLAttributes } from 'react';

interface ISearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
	isLarge?: boolean;
}

const SearchInput: FC<ISearchInputProps> = props => {
	const { value, onChange, isLarge, ...restProps } = props;
	return (
		<div>
			<input
				className={isLarge ? 'large-search-input' : 'search-input'}
				placeholder="Search for the right one..."
				required
				value={value}
				onChange={onChange}
				{...restProps}
			/>
		</div>
	);
};

export default SearchInput;

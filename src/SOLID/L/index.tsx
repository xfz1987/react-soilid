import { ChangeEvent, useState, useCallback } from 'react';
import SearchInput from './searchInput';

export default function L() {
	const [value, setValue] = useState('');

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	return (
		<SearchInput
			value={value}
			onChange={handleChange}
			isLarge
		/>
	);
}

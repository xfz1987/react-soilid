import { useState, useCallback } from 'react';

export function useFeaturedFitler() {
	const [filterFeatured, setFilterFeatured] = useState(true);

	const toggleFeatured = useCallback(
		(feature: string) => {
			setFilterFeatured(feature === '1');
		},
		[setFilterFeatured]
	);

	return { filterFeatured, toggleFeatured };
}

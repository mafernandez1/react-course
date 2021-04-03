import { useEffect, useState } from 'react';
import { getGifs } from '../services/gifs.petition';
export const useFetchGifs = (category: string) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((imgs) =>
			setState({
				data: imgs,
				loading: false,
			})
		);
	}, [category]);

	return state;
};

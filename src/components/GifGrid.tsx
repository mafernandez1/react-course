import { GifGridItem } from './GifGridItem';

import { ImageAdto } from '../adto/image.adto';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }: { category: string }) => {
	// const [images, setImages] = useState([]);

	// useEffect(() => {
	// 	getGifs(category).then(setImages);
	// }, [category]);

	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3 className="animate__animated animate__fadeIn">{category}</h3>

			{loading && <p className="animate__animated animate__flash">Loading...</p>}

			<div className="card-grid">
				{images.map((img: ImageAdto) => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};

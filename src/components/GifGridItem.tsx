import { ImageAdto } from '../adto/image.adto';

export const GifGridItem = (img: ImageAdto) => {
	return (
		<div className="card animate__animated animate__fadeIn">
			<img src={img.url} alt={img.title} />
			<p>{img.title}</p>
		</div>
	);
};

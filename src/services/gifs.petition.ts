export const getGifs = async (category: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=XnuIZE5jeIuOmS6cVhFbZDbafGkkR6ZZ&limit=10&q=${encodeURI(category)}`;
	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img: any) => {
		return {
			id: img.id,
			title: img.title,
			url: img.images?.downsized_medium.url,
		};
	});

	return gifs;
};

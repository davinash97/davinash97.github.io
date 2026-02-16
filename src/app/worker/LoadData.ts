onmessage = async (event) => {
	const { type } = event.data;

	try {
		const module = await import(`@data/${type}.json`);
		postMessage({ type, data: module.default });
	} catch (err) {
		postMessage({ type, data: [] });
	}
};

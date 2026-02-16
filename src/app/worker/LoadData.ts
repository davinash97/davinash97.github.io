onmessage = async (event) => {
	const { type } = event.data;

	try {
		const importedModule = await import(`@data/${type}.json`);
		postMessage({ type, data: importedModule.default });
	} catch {
		postMessage({ type, data: [] });
	}
};

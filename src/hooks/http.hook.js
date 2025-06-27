

const useHttp = () => {

	const request = async (url, method = 'GET') => {

		try {
			const res = await fetch(url, {method});

			const data = await res.json();

			return data;
		} catch {
			throw new Error(`Couldn't fetch ${url}`)
		}
	}

	return {request}
}

export default useHttp;
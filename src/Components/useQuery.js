//This is a custom hook for the get blogs request

import { useState, useEffect } from "react";

function useQuery(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setData(data));
	}, [url]);

	return {
		data,
		setData,
	};
}

export default useQuery;

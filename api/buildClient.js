import axios from "axios";

export default ({ req }) => {
	if (typeof window === "undefined") {
		return axios.create({
			headers: req.headers,
		});
	} else {
		return axios.create({});
	}
};

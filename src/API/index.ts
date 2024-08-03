import axios from "axios";

const instance = axios.create({
	baseURL: "https://localhost:8080/",
});

instance.interceptors.response.use(function (response) {
	if (response.data && response.data.data && response.data.data.user) {
		const user = {
			fullName: response.data.data.user.fullName,
			email: response.data.data.user.email,
			telephone: response.data.data.user.telphone,
			id: response.data.data.user.id,
			role: response.data.data.user.role,
			...response.data.data.user,
		};

		localStorage.setItem("user", JSON.stringify(user));
		response.data.data.user = user;
	}
	return response;
});

instance.interceptors.request.use(
	function (config) {
		const token = localStorage.getItem("token");

		if (token) {
			config.headers["Authorization"] = `Bearer ${token}`;
		}

		return config;
	},
	function (error) {
		return Promise.reject(error);
	}
);

export default instance;

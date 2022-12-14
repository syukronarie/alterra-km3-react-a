import axiosInstance from "../configs/axiosInstance/index";

const APIUser = {
	async getAllUsers(limit) {
		try {
			const config = {
				params: {
					limit,
				},
			};
			return await axiosInstance.get("/user", config);
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},

	async getUserById(id) {
		try {
			const res = await axiosInstance.get(`/user/${id}`);
			return res;
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},

	async createUser(data) {
		try {
			const response = await axiosInstance.post("/user/create", data);
			console.log(response);
			return response;
		} catch (error) {
			const { message } = error.response;
			throw new Error(message);
		}
	},
	async updateUser(data) {
		try {
			const id = data.id;
			const { firstName, lastName, title, picture } = data;
			const res = await axiosInstance.put(`/user/${id}`, {
				firstName,
				lastName,
				title,
				picture,
			});
			console.log(res);
			return res;
		} catch (err) {
			console.log(err.response);
		}
	},
};

export default APIUser;

import axiosInstance from "../configs/axiosInstance/index";
import UpdateUser from "../pages/UpdateUser";

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
			return res
		} catch (error) {
			const { message } = error.response.data;
			throw new Error(message);
		}
	},

	async updateUser(id,data){
		try{
			// const config = {
			// 	body: {
			// 		data
			// 	},
			// };
			const res = await axiosInstance.put(`/user/${id}`,data)
			console.log(res)
			return res
		}catch(err){
			console.log(err.response)
		}
	}
};

export default APIUser;

import axios from "axios"
import { serverBaseUrl } from "src/config"

export const saveMessage = (message) => {
	return sendRequest("save-message.php", { message })
}
export const fetchMessages = () => {
	return sendRequest("fetch-messages.php")
}

const sendRequest = (url, obj = {}) => {
	const bodyFormData = new FormData()
	Object.keys(obj).forEach(key => {
		if(obj[key].lastModified)
			bodyFormData.append(key, obj[key])
		else
			bodyFormData.append(key, JSON.stringify(obj[key]))
		
	})

	return axios({
		method: "post",
		url: serverBaseUrl + url,
		data: bodyFormData,
		headers: { "Content-Type": "multipart/form-data" },
	})
		.then(response => {
			console.log("rizzed", response.data)
			return response.data
		})
		.catch(err => {
			console.log("cheger on network", err)
			return ({ success: false, message: "NETWORK_ERROR" })
		})
		.then(({ success, message, result }) => {
			if(success == false) {
				throw message
			} else {
				return result
			}
		})
}

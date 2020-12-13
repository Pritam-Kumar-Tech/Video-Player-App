import axios from "axios";

const KEY = "AIzaSyAEM_pinOQDQIi8J1AA0SrpBrHwqtb_Qfk";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 50,
		key: KEY,
	},
});

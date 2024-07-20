import { model, Schema } from "mongoose";

export default model('Guild', new Schema({
	id: String,
	tickets: {
		activated: Boolean,
		channel: String
	}
}))
import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
	{
		url: {
			type: String,
			required: true,
		},
		validity: {
			type: Number,
			required: true,
		},
		shortcode: {
			type: String,
			required: true,
        },
		expiry: {
			type: Date,
			required: true,
		},
        shortLink: {
            type: String,
            required: true,
        },
        totalClicks: {
            type: Number,
            required: true,
        },
	},
	{
		timestamps: true,
	}
);

const Url = mongoose.model("Url", urlSchema);

export default Url;
const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const {ObjectId} = require("mongoose").Schema.Types;

const Stats = mongoose.Schema({
	likes :  {
		type     : Number,
		required : true,
		default : 0,
		validate : {
			validator : Number.isInteger,
			message   : "{VALUE} is not an integer value"
		}
	},
	dislikes : {
		type     : Number,
		required : true,
		default : 0,
		validate : {
			validator : Number.isInteger,
			message   : "{VALUE} is not an integer value"
		}
	},
	comments : {
		type     : Number,
		required : true,
		default : 0,
		validate : {
			validator : Number.isInteger,
			message   : "{VALUE} is not an integer value"
		}
	}
}, { _id : false });

const CommentSchema = mongoose.Schema(
	{
		parentId : {
			type : ObjectId,
			require : true
		},
		videoId : {
			type : ObjectId,
			require : true,
			ref : "ftv_video"
		},
		userId : {
			type : ObjectId,
			require : true,
			ref : "User"
		},
		comment : {
			type : String,
			require : false,
		},
		tags : {
			type : [String],
			require : true
		},
		channelTagged : {
			type : ObjectId,
			require : false
		},
		stats : {
			type : Stats,
			require: true,
			default : () => ({})
		},
		deletedAt: {
			type: Date,
			required : false
		},
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
CommentSchema.plugin(toJSON);
CommentSchema.plugin(paginate);

/**
 * @typedef Comment
 */
const Comment = mongoose.model("ftv_comments", CommentSchema);

module.exports = Comment;

const mongoose = require("mongoose");
const { toJSON, paginate } = require("./plugins");
const { ObjectId } = require("mongoose").Schema.Types;

const CommentLikeSchema = mongoose.Schema(
	{
		commentId : {
			type : ObjectId,
			require:true,
			ref : "ftv_comments"
		},
		videoId : {
			type : ObjectId,
			require:true,
			ref : "ftv_videos"
		},
		user : {
			type : ObjectId,
			require: true,
			ref : "users"
		}
	},
	{
		timestamps: true,
	}
);

// add plugin that converts mongoose to json
CommentLikeSchema.plugin(toJSON);
CommentLikeSchema.plugin(paginate);

/**
 * @typedef CommentLike
 */
const CommentLike = mongoose.model("ftv_comment_like", CommentLikeSchema);

module.exports = CommentLike;

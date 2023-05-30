const { GlobalConfig, Language, Banner } = require("../models");

/**
 * Get help center content
 * @returns {Promise<GlobalConfig>}
 */
const getHelpCenterContent = async (id) => {
	return await GlobalConfig.findOne().select('helpCenter');
};

/**
 * Get languages list
 * @returns {Promise<Language>}
 */
const getLanguages = async () => {
	return await Language.find().lean();
};

const getBanners = async (filter) => {
	let pipeline = [
		{
		  '$match': filter	
		},
		{
		  '$lookup': {
			'from': 'ftv_videos', 
			'localField': 'videoId', 
			'foreignField': '_id', 
			'as': 'result'
		  }
		}, {
		  '$unwind': {
			'path': '$result'
		  }
		}, {
		  '$project': {
			'_id': 1, 
			'posterUrl': 1, 
			'videoUrl': 1, 
			'songName': 1, 
			'artistName': 1, 
			'videoId': 1, 
			'streamingBannerLabel': 1, 
			'slug': 1, 
			'languageId': 1, 
			'updatedAt': 1, 
			'thumbnails': '$result.thumbnails', 
			'newThumbnails': {
			  'large': {
				'$arrayElemAt': [
				  '$result.thumbnails', 0
				]
			  }, 
			  'small': {
				'$ifNull': [
				  {
					'$arrayElemAt': [
					  '$result.thumbnails', 1
					]
				  }, {
					'$arrayElemAt': [
					  '$result.thumbnails', 0
					]
				  }
				]
			  }
			}
		  }
		}
	  ]
	return await Banner.aggregate(pipeline);
	//return await Banner.find(filter).lean();
};

/**
 * Get app config
 * @param {Object} options
 * @returns {Promise<GlobalConfig>}
 */
 const getAppConfig = async (options) => {
	let globalConfig = await GlobalConfig.findOne().select('appConfig').lean();
	globalConfig.appConfig.isHardUpdate = false;
	globalConfig.appConfig.isSoftUpdate = false;
	let contactUs = {};
	if(options.appName && options.appName === 'fantv'){
		contactUs = {
			mobile: globalConfig.appConfig.contactUs.fantv_mobile,
			whatsapp: globalConfig.appConfig.contactUs.fantv_whatsapp,
			email: globalConfig.appConfig.contactUs.fantv_email,
		}
	}
	if(options.appName && options.appName === 'fantiger'){
		contactUs = {
			mobile: globalConfig.appConfig.contactUs.fantiger_mobile,
			whatsapp: globalConfig.appConfig.contactUs.fantiger_whatsapp,
			email: globalConfig.appConfig.contactUs.fantiger_email,
		}
	}
	globalConfig.appConfig.contactUs = contactUs;
	if(!options.appName){
		delete globalConfig.appConfig.contactUs;
	}
	if (options.osType && options.osType.toLowerCase() == 'android') {
		if (options.appVersionCode < globalConfig.appConfig.androidVersionCode)
			globalConfig.appConfig.isSoftUpdate = true;
	}
	return globalConfig
};

module.exports = {
	getHelpCenterContent,
	getLanguages,
	getBanners,
	getAppConfig
};

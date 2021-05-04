const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		admincode:{ type: String },
		isAdmin: { type: boolean, default :false },
		isProf: { type: boolean, default :false },
		profile : {type:Buffer},
		area_interest:{type:Array}
	},
	{ collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model

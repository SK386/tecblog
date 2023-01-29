const Sequelize = require("sequelize")
const sequelize = new Sequelize("rcnews", "nodejs", "12345", {
	host:"localhost" ,
	dialect:'mysql'
})


// sequelize models

const Post = sequelize.define("Post", {

	Title:{
		type:Sequelize.STRING
	},

	Synopsis:{
		type:Sequelize.TEXT
	},

	Image:{
		type:Sequelize.BLOB
	},
	
	Content:{
		type:Sequelize.TEXT
	}
})
const Account = sequelize.define("account",{
	Fname:{
		type:Sequelize.STRING
	},

	Lname:{
		type:Sequelize.STRING	
	},

	Email:{
		type:Sequelize.STRING
	},

	Pass:{
		type:Sequelize.INTEGER
	}
})



// sync models
//Account.sync()
//Post.sync()

// checking connection
sequelize.authenticate().then(function(){
	console.log("connection with database established")
}).catch(function(error){
	console.log("an error found "+error)
})

module.exports

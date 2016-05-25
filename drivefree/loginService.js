function loginService(mongoose, appSchema){
	var Login = mongoose.model("Login", appSchema.loginSchema);	
	
	this.getLogin = function(p_usuario, successCallback, errorCallback){
		var loginFind = new Login();
		
		loginFind.find({}, function (err, data){
			if (err) errorCallback(err);
			
			else successCallback(data);
		});	
	}
}

module.exports.loginService = loginService;


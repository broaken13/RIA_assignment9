const fs = require('fs');

var directory = './routes/';

module.exports = function (app) {
	return new Promise((resolve, reject) => {
		fs.readdir(directory, function loadRoutes(err, files) {
			if(err)
				return reject(err);

			files.forEach(controller => {

				if(controller.search(/\.js$/) == -1) { // If its a directory, then load it's children
					var placeholder = directory; 
					directory = `${directory}${controller}/`; // Manipulate the variable to get around scope issues
					const subfiles = fs.readdirSync(directory);
					loadRoutes(null, subfiles);
					directory = placeholder; 
				} else {
					
					const urlPath = directory.replace(/^.\/routes/, '');
					const controllerName = controller.substr(0, controller.lastIndexOf('.'));
					if (controllerName === 'home' && directory === './routes/')
						app.use('/', require(`${directory}${controllerName}`));
					
					

					app.use(`${urlPath}${controllerName}`, require(`${directory}${controllerName}`));
				}
				
			});
			resolve(app);
		});
	});
};
module.exports = function(grunt) {
	grunt.loadNpmTasks( "grunt-contrib-uglify-es" );

	grunt.config( "uglify", {
		sw: {
			files: {
			}
		}
	});
};
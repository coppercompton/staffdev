var gulp = require("gulp");
var browserSync = require("browser-sync").create();
var sass = require("gulp-sass");

// Static server
gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch("**/*.html").on("change", browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task("sass", function() {
	return gulp
		.src("scss/master.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"))
		.pipe(browserSync.stream());
});

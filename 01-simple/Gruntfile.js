module.exports = function(grunt) {

    grunt.initConfig({
        concat: {
            app: {
                src: 'src/js/**/*.js',
                dest: 'build/compiled/app.js'
            }
        },
        uglify: {
            app: {
                src: 'build/compiled/app.js',
                dest: 'build/minimised/app.min.js'
            },
            // For this example, we minimise jQuery ourselves
            // rather than using any pre-minimised file.
            jquery: {
                src: 'bower_components/jquery/jquery.js',
                dest: 'build/minimised/jquery.min.js'
            }
        },
        hash: {
            options: {
                mapping: 'dist-grunt/assets-mapping.json'
            },
            files: {
                src: 'build/minimised/*.js',
                dest: 'dist-grunt'
            }
        },
        less: {
            'dist-grunt/main.css': 'src/stylesheets/main.less'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-hash');

    grunt.registerTask('javascript', ['concat', 'uglify', 'hash']);
    grunt.registerTask('css', ['less']);

    grunt.registerTask('default', ['javascript', 'css']);

};

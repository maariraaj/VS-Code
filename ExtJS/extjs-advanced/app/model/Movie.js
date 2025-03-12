Ext.define('DOM.model.Movie', {

    config: {
        title: 'Thuppaki',
        cast: 'Vijay, Kajal Agarwal, Vidyut',
        director: 'AR Murugadoss',
        genre: 'Action, Thriller',
        language: 'Tamil'
    },

    constructor: function (config) {
        this.initConfig(config);
    },

    toString: function () {
        return this.title + ' starring ' + this.cast + ', Director: ' + this.director + ' in ' + this.language + '. It is a ' + this.genre + ' movie';
    }
})
Ext.define('Movies.model.Movie', {

    config: {
        title: 'Ghilli',
        cast: 'Vijay, Trisha, Prakash Raj',
        director: 'Dharani',
        genre: 'Action',
        language: 'Tamil'
    },

    constructor: function (config) {
        this.initConfig(config);
    }
})
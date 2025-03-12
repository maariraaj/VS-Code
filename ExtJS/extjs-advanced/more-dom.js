Ext.application({
    name: 'DOM',

    models: ['DOM.model.Movie'],

    launch: function () {
        var domHelper = Ext.DomHelper;       //Ext JS DOM Helper utility class
        // var listItems = {
        //     id: 'dhList',
        //     tag: 'ol',
        //     children: [{
        //         tag: 'li',
        //         html: 'Raj'
        //     }, {
        //         tag: 'li',
        //         html: 'Kumar'
        //     }, {
        //         tag: 'li',
        //         html: 'Prabha'
        //     }]
        // }

        var movies = [
            Ext.create('DOM.model.Movie'),
            Ext.create('DOM.model.Movie', {
                title: 'Ghilli',
                cast: 'Vijay, Trisha, Prakash Raj',
                director: 'Dharani',
                genre: 'Action',
                language: 'Tamil'
            })
        ];

        var listMovies = domHelper.append('display', { tag: 'ul' });
        var eachMovies = domHelper.createTemplate({ tag: 'li', html: movies[0] });

        for (var i = 0; i < movies.length; ++i) {
            eachMovies.append(listMovies, i);
        }
        // domHelper.append('display', listItems);
        domHelper.append('display', listMovies);
    }
})
Ext.application({
    name: 'Movies',

    models: ['Movies.model.Movie'],

    launch: function () {
        var movie1 = Ext.create('Movies.model.Movie');

        var movie2 = Ext.create('Movies.model.Movie',
            {
                title: 'Thuppakki',
                cast: 'Vijay, Kajal Agarwal, Vidut',
                director: 'AR Murugadoss',
                genre: 'Thriller, Action',
                language: 'Tamil'
            }
        );

        Ext.create('Ext.container.Container', {
            style: { borderColor: 'red', borderStyle: 'solid', borderWidth: '15px' },
            width: '50%',
            height: '50%',
            padding: '25 25 25 25',
            renderTo: 'display',
            html: `
            <strong>Cast and Crew of ${movie1.getTitle()}</strong>
            <p>Cast: ${movie1.getCast()}</p>
            <p>Director: ${movie1.getDirector()}</p>
            <p>Genre: ${movie1.getGenre()}</p>
            <p>Language: ${movie1.getLanguage()}</p>
            <hr />

            <strong>Cast and Crew of ${movie2.getTitle()}</strong>
            <p>Cast: ${movie2.getCast()}</p>
            <p>Director: ${movie2.getDirector()}</p>
            <p>Genre: ${movie2.getGenre()}</p>
            <p>Language: ${movie2.getLanguage()}</p>
            <hr />
            `
        })
    }
})
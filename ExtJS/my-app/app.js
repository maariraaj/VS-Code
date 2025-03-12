/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'My.app.Application',

    name: 'My.app',

    requires: [
        // This will automatically load all classes in the My.app namespace
        // so that application classes do not need to require each other.
        'My.app.*'
    ],

    // The name of the initial view to create.
    mainView: 'My.app.view.main.Main'
});

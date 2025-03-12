Ext.define('ExtjsAdvanced.model.Student', {
    config: {
        studentName: ''
    },

    mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
    },

    setStudentName: function (newName) {
        this.studentName = newName;
        this.fireEvent('studentNameChanged', newName);
    }
})
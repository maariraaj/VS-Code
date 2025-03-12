Ext.application({
    name: 'Events',

    launch: function () {
        var count = 5;

        var image = Ext.create('Ext.Img', {
            src: 'resources/images/frowning-face.png'
        });

        var panel = Ext.create('Ext.panel.Panel', {
            height: 250,
            width: 250,
            html: `<h1>${count}</h1>`,
            updateCount: function (newCount) {
                this.setHtml(`<h1>${newCount}</h1>`); // Ensures proper update
            }
        });

        var mainPanel = Ext.create('Ext.panel.Panel', {
            height: 250,
            width: 250,
            renderTo: Ext.getBody(),
            items: [panel, image],
            listeners: {
                el: {
                    mouseover: function () {
                        mainPanel.countdown();
                        Ext.defer(function () {
                            image.setSrc('resources/images/smiling-face.png');
                        }, 5000);
                    }
                }
            },

            countdown: function () {
                var interval = setInterval(function () {
                    if (count >= 0) {
                        panel.updateCount(count);
                        count--; // Decrement one by one
                    } else {
                        clearInterval(interval); // Stop countdown at 0
                    }
                }, 1000); // Runs every 1 second
            }
        });
    }
});

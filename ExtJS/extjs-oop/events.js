Ext.application({
    name: 'Events',

    launch: function () {
        // var btnOne = Ext.create('Ext.Button', {
        //     text: 'One',
        //     renderTo: Ext.getBody(),
        //     listeners: {
        //         click: function () {
        //             Ext.Msg.alert('You clicked the button one.')
        //         }
        //     }
        // })

        // var btnTwo = Ext.create('Ext.Button', {
        //     text: 'Two',
        //     renderTo: Ext.getBody(),
        //     listeners: {
        //         click: function () {
        //             Ext.Msg.alert('You clicked the button two.')
        //         }
        //     },

        //     items: [btnOne, btnTwo]
        // })

        var image = Ext.create('Ext.Img', {
            src: 'resources/images/frowning-face.png'
        });

        var count = 5;

        var panel = Ext.create('Ext.panel.Panel', {
            height: 250,
            width: 250,
            html: `<h1>${this.count--}</h1>`
        })

        Ext.create('Ext.panel.Panel', {
            height: 250,
            width: 250,
            renderTo: Ext.getBody(),
            items: [panel, image],
            listeners: {
                el: {
                    // mouseover: function () {
                    //     image.setSrc('resources/images/smiling-face.png')
                    // },
                    // mouseleave: function () {
                    //     image.setSrc('resources/images/frowning-face.png')
                    // }
                    mouseover: function () {
                        this.countdown();
                        Ext.defer(function () {
                            image.setSrc('resources/images/smiling-face.png');
                        }, 5000)
                    }
                }
            },

            countdown: function () {
                Ext.defer(function () {
                    panel.html = `<h1>${this.count--}</h1>`;
                }, 1000);
            }
        })
        // Ext.create('Ext.Panel', {
        //     text: 'Click me',
        //     renderTo: Ext.getBody(),

        //     html: `
        //     <div>
        //         <input id="name" placeholder="Enter your name..." />
        //         <button onClick>Go</button>        
        //     </div>
        //     `,

        //     listeners: {
        //         afterrender: function () {
        //             Ext.Msg.alert('Enter the name and click on go')
        //         }
        //     }
        // })
    }
})
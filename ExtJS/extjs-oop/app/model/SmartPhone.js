Ext.define('ExtjsOop.model.SmartPhone', {
    extend: 'ExtjsOop.model.IntermediatePhone',

    chipset: String,
    cpu: String,
    gpu: String,
    video: String,
    nfc: Boolean,

    constructor: function (company,
        model,
        technology,
        dimensions,
        weight,
        sim,
        displayType,
        screenSize,
        resolution,
        os,
        chipset,
        cpu,
        gpu,
        cardSlot,
        phoneBook,
        internalMemory,
        camera,
        cameraPixels,
        video,
        gps,
        bluetooth,
        radio,
        usb,
        nfc,
        sensors,
        browser,
        batteryCapacity,
        price) {
        this.callParent([company,
            model,
            technology,
            dimensions,
            weight,
            sim,
            displayType,
            screenSize,
            resolution,
            os,
            cardSlot,
            phoneBook,
            internalMemory,
            camera,
            cameraPixels,
            gps,
            bluetooth,
            radio,
            usb,
            sensors,
            browser,
            batteryCapacity,
            price]);
        this.chipset = chipset;
        this.cpu = cpu;
        this.gpu = gpu;
        this.video = video;
        this.nfc = nfc;
    },

    toString: function () {
        return `
        ${this.callParent()}
        <div>
            <dl><b>PLATFORM</b>
                <dt>Chipset:</dt><dd>${this.chipset}</dd>
                <dt>CPU:</dt><dd>${this.cpu}</dd>
                <dt>GPU:</dt><dd>${this.gpu}</dd>
            </dl>

            <dl><b>CAMERA</b>
                <dt>Video:</dt><dd>${this.video}</dd>
            </dl>
            <dl><b>COMMS</b>
                <dt>NFC:</dt><dd>${this.nfc ? "Yes" : "No"}</dd>
            </dl>
        </div>
        `
    }
})
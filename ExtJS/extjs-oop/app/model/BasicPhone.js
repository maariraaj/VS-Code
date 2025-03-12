Ext.define("ExtjsOop.model.BasicPhone", {
    company: String,
    model: String,
    technology: String,
    dimensions: String,
    weight: Number,
    sim: String,
    displayType: String,
    screenSize: Number,
    resolution: String,
    cardSlot: Boolean,
    phoneBook: Boolean,
    internalMemory: Number,
    camera: Boolean,
    cameraPixels: Number,
    batteryCapacity: Number,
    price: Number,

    constructor: function (
        company,
        model,
        technology,
        dimensions,
        weight,
        sim,
        displayType,
        screenSize,
        resolution,
        cardSlot,
        phoneBook,
        internalMemory,
        camera,
        cameraPixels,
        batteryCapacity,
        price
    ) {
        this.company = company;
        this.model = model;
        this.technology = technology;
        this.dimensions = dimensions;
        this.weight = weight;
        this.sim = sim;
        this.displayType = displayType;
        this.screenSize = screenSize;
        this.resolution = resolution;
        this.cardSlot = cardSlot;
        this.phoneBook = phoneBook;
        this.internalMemory = internalMemory;
        this.camera = camera;
        this.cameraPixels = cameraPixels;
        this.batteryCapacity = batteryCapacity;
        this.price = price;
    },

    toString: function () {
        return `
    <div>
        <strong>Specifications of ${this.company} ${this.model} </strong>
        <dl>
            <b>NETWORK</b>
            <dt>Technology:</dt> <dd> ${this.technology}</dd>
        </dl>
    
    
        <dl>
            <b>BODY</b>
            <dt>Dimension:</dt> <dd> ${this.dimensions}</dd>
            <dt>Weight: ${this.weight} gram</dd>
        </dl>
    
    
        <dl>
            <b>SIM</b>
            <dd>${this.sim}</dd>
        </dl>
    
    
        <dl>
            <b>DISPLAY</b>
            <dt>Type:</dt> <dd> ${this.displayType}</dd>
            <dt>Size:</dt> <dd> ${this.screenSize}"</dd>
            <dt>Resolution:</dt> <dd> ${this.resolution}</dd>
        </dl>
    
    
        <dl>
            <b>MEMORY</b>
            <dt>Card Slot:</dt> <dd> ${this.cardSlot ? "Yes" : "No"}</dd>
            <dt>Phone Book:</dt> <dd> ${this.phoneBook ? "Yes" : "No"}</dd>
            <dt>Internal:</dt> <dd> ${this.internalMemory} GB</dd>
        </dl>
    
    
        <dl>
            <b>CAMERA</b>
            <dt>Camera Pixels:</dt> <dd> ${this.cameraPixels}</dd>
        </dl>
    
    
        <dl>
            <b>BATTERY</b>
            <dd>${this.batteryCapacity} mAh</dd>
        </dl>
    
    
        <dl>
            <b>PRICED AT</b>
            <dt>INR:</dt> <dd> ${this.price}</dd>
        </dl>
    </div>
    `;
    },
});

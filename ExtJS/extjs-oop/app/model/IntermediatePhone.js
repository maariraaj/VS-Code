Ext.define("ExtjsOop.model.IntermediatePhone", {
  extend: "ExtjsOop.model.BasicPhone",

  os: String,
  gps: Boolean,
  bluetooth: Boolean,
  radio: Boolean,
  usb: Boolean,
  sensors: String,
  browser: String,

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
    price
  ) {
    this.callParent(
      [
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
      ]
    );
    this.os = os;
    this.gps = gps;
    this.bluetooth = bluetooth;
    this.radio = radio;
    this.usb = usb;
    this.sensors = sensors;
    this.browser = browser;
  },

  toString: function () {
    return `
      ${this.callParent()} 
      <div>
          <dl>
              <b>PLATFORM</b>
              <dt>OS:</dt> <dd> ${this.os}</dd>
          </dl>

          <dl>
              <b>COMMS</b>
              <dt>GPS:</dt> <dd> ${this.gps ? "Yes" : "No"}</dd>
              <dt>Bluetooth:</dt> <dd>${this.bluetooth ? "Yes" : "No"} </dd>
              <dt>Radio:</dt> <dd> ${this.radio ? "Yes" : "No"}</dd>
              <dt>USB:</dt> <dd> ${this.usb ? "Yes" : "No"}</dd>
          </dl>

          <dl>
              <b>FEATURES</b>
              <dt>Sensors:</dt> <dd> ${this.sensors}</dd>
              <dt>Browser:</dt> <dd> ${this.browser} </dd>
          </dl>
      </div>
    `;
  },
});

Ext.define("FirstExtApp.model.Address", {
  location: String,
  city: String,
  state: String,

  // constructor: function (location, city, state) {
  //   this.location = location;
  //   this.city = city;
  //   this.state = state;
  // },

  setLocation(location) {
    this.location = location;
  },
  getLocation() {
    return this.location;
  },

  setCity(city) {
    this.city = city;
  },
  getCity() {
    return this.city;
  },

  setState(state) {
    this.state = state;
  },
  getState() {
    return this.state;
  },

  toString: function () {
    return `
      <p>location: ${this.location}</p>
      <p>city: ${this.city}</p>
      <p>state:${this.state}</p>`;
  },
});

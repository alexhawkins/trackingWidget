import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants  from "../constants/AppConstants";

var assign = require('object.assign');
var EventEmitter = require("events").EventEmitter;
var ActionTypes = AppConstants.ActionTypes;

var CHANGE_EVENT = "change";

var _shipment = {};
var _tracking = {};

var setShipment = (data) => {
  _shipment = data;
  console.log('SHIPMENT SET', data);
};

var setTracking = (data) => {
  _tracking = data;
  console.log('TRACKING SET', data);
};

var Store = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getShipment: function() {
    return _shipment;
  },

  getTracking: function() {
    return _tracking;
  }

});


Store.dispatchToken = AppDispatcher.register(function(action) {
  console.log('ACTION', action);
  switch (action.type) {

    case ActionTypes.GET_SHIPMENT:
      setShipment(action.data);
      Store.emitChange();
      break;

    case ActionTypes.GET_TRACKING:
      setTracking(action.data);
      Store.emitChange();
      break;
    default:

    case ActionTypes.GET_SHIPMENT_AND_TRACKING:
      setShipment(action.shipment);
      setTracking(action.tracking);
      Store.emitChange();
      break;
    // do nothing
  }
});

export default Store;
import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
var assign = require('object.assign');
import EventEmitter from 'events';

var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = "change";

var _shipment = [];
var _tracking = [];

function reset() {
  _shipment = [];
  _tracking = [];
}

class Store extends EventEmitter {
  constructor() {
    super();
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  getShipment() {
    return _shipment;
  }

  getTracking() {
    return _tracking;
  }

  setShipment(data) {
    _shipment.push(data);
  }

  setTracking(data) {
    _tracking.push(data);
  }
}

let storeInstance = new Store();
storeInstance.dispatchToken = AppDispatcher.register((action) => {
  switch (action.type) {
    case ActionTypes.GET_SHIPMENT:
      reset();
      storeInstance.setShipment(action.data);
      break;
    case ActionTypes.GET_TRACKING:
      reset();
      storeInstance.setTracking(action.data);
      break;
    case ActionTypes.GET_SHIPMENT_AND_TRACKING:
      reset();
      storeInstance.setShipment(action.shipment);
      storeInstance.setTracking(action.tracking);
      break;
    default:
      return;  // do nothing

  }
  storeInstance.emitChange();
});

export default storeInstance; 
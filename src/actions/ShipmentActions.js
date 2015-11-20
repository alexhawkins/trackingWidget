import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import ShipHawkApi from "../utils/ShipHawkApi";

var ActionTypes = AppConstants.ActionTypes;


var shipmentAndTrackingCallback = (shipRes) => {
  AppDispatcher.dispatch({
    type: ActionTypes.GET_SHIPMENT_AND_TRACKING,
    shipment: shipRes
  });
};

var ShipmentActions = {
  getShipmentFromTracking: (trackingNumber, carrierCode) => {
    ShipHawkApi.getShipmentFromTracking(trackingNumber, carrierCode, shipmentAndTrackingCallback);
  }
};

export default ShipmentActions;

import AppDispatcher from "../dispatcher/AppDispatcher";
import AppConstants from "../constants/AppConstants";
import ShipHawkApi from "../utils/ShipHawkApi";

var ActionTypes = AppConstants.ActionTypes;


var shipmentAndTrackingCallback = (shipRes, trackRes) => {
  AppDispatcher.dispatch({
    type: ActionTypes.GET_SHIPMENT_AND_TRACKING,
    shipment: shipRes,
    tracking: trackRes
  });
};

var ShipmentActions = {
  getShipmentAndTracking: (shipmentId, apiKey) => {
    ShipHawkApi.getShipment(shipmentId, apiKey, shipmentAndTrackingCallback);
  }
};

export default ShipmentActions;
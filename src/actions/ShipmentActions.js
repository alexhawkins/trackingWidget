import AppDispatcher    from "../dispatcher/AppDispatcher";
import AppConstants     from "../constants/AppConstants";
import ShipHawkApi from "../utils/ShipHawkApi";

var ActionTypes = AppConstants.ActionTypes;


var shipmentCallback = (response) => {
  AppDispatcher.dispatch({
    type: ActionTypes.GET_SHIPMENT,
    data: response
  });
};

var trackingCallback = (response) => {
  AppDispatcher.dispatch({
    type: ActionTypes.GET_TRACKING,
    data: response
  });
};

var shipmentAndTrackingCallback = (shipRes, trackRes) => {
  AppDispatcher.dispatch({
    type: ActionTypes.GET_SHIPMENT_AND_TRACKING,
    shipment: shipRes,
    tracking: trackRes
  });
}

var ShipmentActions = {
  getShipment: (shipmentId, apiKey) => {
    ShipHawkApi.getShipment(shipmentId, apiKey, shipmentCallback)
  },
  getTracking: (shipmentId, apiKey) => {
    ShipHawkApi.getTracking(shipmentId, apiKey, trackingCallback)
  },
  getShipmentAndTracking: (shipmentId, apiKey) => {
    ShipHawkApi.getShipmentAndTracking(shipmentId, apiKey, shipmentAndTrackingCallback)
  }
};

export default ShipmentActions;
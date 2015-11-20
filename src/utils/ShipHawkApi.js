import axios from 'axios';

var ShipHawkApi = {

  getShipmentFromTracking: (trackingNumber, carrierCode, shipmentAndTrackingCallback) => {
      let url = 'https://shiphawk.com/api/v3/public/track?code=' + carrierCode + '&tracking_number=' + trackingNumber;
      return axios.get(url).then((shipmentData) => {
        shipmentAndTrackingCallback(shipmentData.data);
      }).catch((error) => {
        console.log(error);
      });
  }
};




export default ShipHawkApi;

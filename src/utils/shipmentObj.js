var ShippingObj = {
  "status": "in_transit",
  "status_updates": [
    {
      "time": "2015-11-07T01:53:00.110+00:00",
      "name": "ORDER RELEASED",
      "location": "",
      "message": "NO COMMENTS ENTERED"
    },
    {
      "time": "2015-11-09T15:38:00.090+00:00",
      "name": "PICKED UP FROM ORIGIN LOCATION",
      "location": "",
      "message": " Shipped from DSCAYMT on 11 09 15 11 00  EST  on VT1708394"
    },
    {
      "time": "2015-11-12T00:24:01.720+00:00",
      "name": "ARRIVED AT 1ST HUB",
      "location": "",
      "message": " Received at MXD Group on 11 11 15 at 10 00  PST  on VT1708394"
    }
  ],
  "tracking_number": "794664339112",
  "carrier_name": "FedEx",
  "packing": {
    "packages": [
      {
        "tracking_number": "794664338940",
        "tracking_url": "https://www.fedex.com/apps/fedextrack/?action=track&trackingnumber=794664338940",
        "package_items": [
          {
            "id": 255090,
            "product_sku": null,
            "product_sku_packing_code": null,
            "item_name": "External Product SKU",
            "dimensions": {
              "length": 65,
              "width": 40,
              "height": 48,
              "weight": 183,
              "volume": 72.2222222222222,
              "density": 2.53
            },
            "freight_class": "300",
            "nmfc": "",
            "xid": "YFUR-15-BE23CAB",
            "value": 0,
            "description": "Louie Cabinet"
          },
          {
            "id": 255090,
            "product_sku": null,
            "product_sku_packing_code": null,
            "item_name": "External Product SKU",
            "dimensions": {
              "length": 65,
              "width": 40,
              "height": 48,
              "weight": 183,
              "volume": 72.2222222222222,
              "density": 2.53
            },
            "freight_class": "300",
            "nmfc": "",
            "xid": "YFUR-15-BE23CAB",
            "value": 0,
            "description": "Large Pillow Case"
          }
        ],
        "dimensions": {
          "length": 2.0,
          "width": 3.0,
          "height": 1.0,
          "weight": 1.0,
          "volume": 0.00347222222222222,
          "density": 288.0
        }
      }]
  },
  "delivery": {
    "street1": "328 W Pedregosa St #B",
    "street2": "",
    "city": "FREMONT",
    "state": "CA",
    "zip": "94539",
    "location_type": "residential",
    "country": "US"
  }
};

export default ShippingObj;
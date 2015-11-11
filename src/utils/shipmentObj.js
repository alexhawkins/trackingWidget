var ShippingObj = {
  "details": {
  "id": 1070430,
    "special_request": null,
    "carrier_name": "MXD",
    "carrier_friendly_name": "MXD",
    "service": "White Glove Delivery",
    "sale_xid": null,
    "status": "in_transit",
    "name": "External Product SKU (CA-DE)",
    "bol": "https://shiphawk-assets-rackspace-production.s3.amazonaws.com/uploads/BOL_1070430.pdf?AWSAccessKeyId=AKIAIGBEYNQ6VGNFN2GQ&Signature=PYoHTB0adNF5rzaCuVJ1jPLQBAU%3D&Expires=1447190715",
    "bol_enabled": true,
    "label": null,
    "address_labels_url": "https://shiphawk-assets-rackspace-production.s3.amazonaws.com/uploads/Address_Labels_1070430.pdf?AWSAccessKeyId=AKIAIGBEYNQ6VGNFN2GQ&Signature=NpH/qCASea1Y1hw8oVQDX0f4iyw%3D&Expires=1447190715",
    "xid": "D77120 / R548443452",
    "packages_count": 1,
    "tracking_number": "1176773301",
    "tracking_url": "",
    "is_managed": true,
    "is_external": false,
    "delivery_instructions": "1 Louie Cabinet - 1 Ctn on 1 Plt",
    "pickup_instructions": null,
    "origin_agent_id": null,
    "is_international": false,
    "reference_numbers": [
    {
      "id": 1885,
      "code": "purchase_id",
      "value": "D77120",
      "name": "Purchase Order #"
    },
    {
      "id": 1886,
      "code": "reference_id",
      "value": "R548443452",
      "name": "Customer Ref #"
    }
  ],
    "print_package_labels_enabled": false,
    "dispatch_enabled": true
},
  "packing": {
  "price": 0,
    "packages": [
    {
      "id": 363935,
      "tracking_number": null,
      "tracking_url": "",
      "packing_type": "palletized",
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
        }
      ],
      "materials": [],
      "labors": [],
      "dimensions": {
        "length": 65,
        "width": 40,
        "height": 48,
        "weight": 183,
        "volume": 72.2222222222222,
        "density": 2.53
      }
    }
  ]
},
  "pickup": {
  "requested_at": "2015-11-10T08:00:00Z",
    "delivered_at": "2015-11-07T00:00:00Z",
    "requested_end_at": null,
    "instructions": null,
    "address": {
    "id": 137065,
      "first_name": "Pedro",
      "last_name": "YHD",
      "street1": "4250 W Shaw Ave",
      "street2": "",
      "city": "FRESNO",
      "state": "CA",
      "zip": "93722",
      "utc_offset": -8,
      "dst": 1,
      "timezone": "PST",
      "phone_number": "1-800-305-9872",
      "email": "shipping@yosemitehomedecor.com",
      "company": "Dot & Bo Fulfillment - YDH",
      "location_type": "commercial",
      "country": "US",
      "code": null
  }
},
  "delivery": {
  "requested_at": "2015-11-16T22:55:45Z",
    "delivered_at": null,
    "requested_end_at": null,
    "instructions": null,
    "address": {
    "id": 137064,
      "first_name": "Sarah",
      "last_name": "Lamb",
      "street1": "421 N. Market Street",
      "street2": null,
      "city": "WILMINGTON",
      "state": "DE",
      "zip": "19801",
      "utc_offset": -5,
      "dst": 1,
      "timezone": "EST",
      "phone_number": "(302)333-7373",
      "email": "slamb28@gmail.com",
      "company": null,
      "location_type": "residential",
      "country": "US",
      "code": null
  }
},
  "billing": null,
  "final_mile": {
  "final_mile_carrier": null,
    "final_mile_service_name": null,
    "final_mile_service_days": null,
    "using_final_mile_carrier": false
},
  "duties_and_taxes": {
  "duty": null,
    "taxes": null
},
  "price_details": {
  "shipping": 307.08,
    "packing": 0,
    "insurance": 0,
    "pickup": 0,
    "delivery": 0,
    "final_mile_delivery": null,
    "accessorials": 0
},
  "dispatch_details": {
  "dispatch_sent_at": "2015-11-06T22:59:06Z",
    "dispatch_confirm_at": null,
    "dispatch_confirmation_number": null,
    "tracking_number": "1176773301"
},
  "assignee_id": null
};

export default ShippingObj;
# MusementApi.SeatPrice

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] 
**event** | [**Event**](Event.md) |  | [optional] 
**priceTag** | [**Pricetag**](Pricetag.md) |  | [optional] 
**rawPrice** | [**Price**](Price.md) | This is the price to the user without any discount applied. (same currency as retailPrice) | [optional] 
**discountAmount** | [**Price**](Price.md) | Amount of discount in same currency as retailPrice (only SeatPrice.discount used because its not in Cart) | [optional] 
**retailPrice** | [**Price**](Price.md) | Price with discount applied (only SeatPrice.discount used because its not in Cart) | [optional] 
**serviceFee** | [**Price**](Price.md) |  | [optional] 
**datetime** | **Number** |  | [optional] 



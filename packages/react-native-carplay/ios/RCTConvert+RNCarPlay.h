#import <CoreLocation/CoreLocation.h>
#import <MapKit/MapKit.h>
#import <CarPlay/CarPlay.h>
#import <React/RCTConvert.h>

@interface RCTConvert (RNCarPlay)

+ (CPTripEstimateStyle)CPTripEstimateStyle:(id)json;
+ (CPPanDirection)CPPanDirection:(id)json;
+ (CPAssistantCellPosition)CPAssistantCellPosition:(id)json;
+ (CPAssistantCellVisibility)CPAssistantCellVisibility:(id)json;
+ (CPAssistantCellActionType)CPAssistantCellActionType:(id)json;
+ (CPMapButton*)CPMapButton:(id)json withHandler:(void (^)(CPMapButton * _Nonnull mapButton))handler;
+ (CPRouteChoice*)CPRouteChoice:(id)json;
+ (MKMapItem*)MKMapItem:(id)json;
+ (CPPointOfInterest*)CPPointOfInterest:(id)json;
+ (CPAlertActionStyle)CPAlertActionStyle:(id)json;
@end

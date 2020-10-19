//
//  RCTConvert+RNCarPlay.m
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/27/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//

#import "RCTConvert+RNCarPlay.h"
#import <React/RCTConvert+CoreLocation.h>
#import <Availability.h>

@implementation RCTConvert (RNCarPlay)

RCT_ENUM_CONVERTER(CPTripEstimateStyle, (@{
                                           @"light": @(CPTripEstimateStyleLight),
                                           @"dark": @(CPTripEstimateStyleDark)
                                           }),
                                         CPTripEstimateStyleDark,
                                         integerValue)

RCT_ENUM_CONVERTER(CPPanDirection, (@{
                                      @"up": @(CPPanDirectionUp),
                                      @"right": @(CPPanDirectionRight),
                                      @"bottom": @(CPPanDirectionDown),
                                      @"left": @(CPPanDirectionLeft),
                                      @"none": @(CPPanDirectionNone),
                                      }), CPPanDirectionNone, integerValue)

+ (CPMapButton*)CPMapButton:(id)json withHandler:(void (^)(CPMapButton * _Nonnull mapButton))handler {
    CPMapButton *mapButton = [[CPMapButton alloc] initWithHandler:handler];

    if ([json objectForKey:@"image"]) {
        [mapButton setImage:[RCTConvert UIImage:json[@"image"]]];
    }

    if ([json objectForKey:@"focusedImage"]) {
        [mapButton setImage:[RCTConvert UIImage:json[@"focusedImage"]]];
    }

    if ([json objectForKey:@"disabled"]) {
        [mapButton setEnabled:![RCTConvert BOOL:json[@"disabled"]]];
    }

    if ([json objectForKey:@"hidden"]) {
        [mapButton setHidden:[RCTConvert BOOL:json[@"hidden"]]];
    }

    return mapButton;
}

+ (MKMapItem*)MKMapItem:(id)json {
    CLLocationCoordinate2D coordinate = CLLocationCoordinate2DMake([RCTConvert double:json[@"latitude"]], [RCTConvert double:json[@"longitude"]]);
    MKPlacemark *placemark = [[MKPlacemark alloc] initWithCoordinate:coordinate];
    MKMapItem *mapItem = [[MKMapItem alloc] initWithPlacemark:placemark];
    return mapItem;
}

+ (CPRouteChoice*)CPRouteChoice:(id)json {
    return [[CPRouteChoice alloc] initWithSummaryVariants:[RCTConvert NSStringArray:json[@"additionalInformationVariants"]] additionalInformationVariants:[RCTConvert NSStringArray:json[@"selectionSummaryVariants"]] selectionSummaryVariants:[RCTConvert NSStringArray:json[@"summaryVariants"]]];
}

#if __IPHONE_OS_VERSION_MIN_REQUIRED >= 140000
+ (CPPointOfInterest*)CPPointOfInterest:(id)json {
    MKMapItem *location = [RCTConvert MKMapItem:json[@"location"]];
    NSString *title = [RCTConvert NSString:json[@"title"]];
    NSString *subtitle = [RCTConvert NSString:json[@"subtitle"]];
    NSString *summary = [RCTConvert NSString:json[@"summary"]];
    NSString *detailTitle = [RCTConvert NSString:json[@"detailTitle"]];
    NSString *detailSubtitle = [RCTConvert NSString:json[@"detailSubtitle"]];
    NSString *detailSummary = [RCTConvert NSString:json[@"detailSummary"]];

    CPPointOfInterest *poi = [[CPPointOfInterest alloc] initWithLocation:location title:title subtitle:subtitle summary:summary detailTitle:detailTitle detailSubtitle:detailSubtitle detailSummary:detailSummary pinImage:nil];
    return poi;
}
#endif

+ (CPAlertActionStyle)CPAlertActionStyle:(NSString*) json {
    if ([json isEqualToString:@"cancel"]) {
        return CPAlertActionStyleCancel;
    } else if ([json isEqualToString:@"destructive"]) {
        return CPAlertActionStyleDestructive;
    }
    return CPAlertActionStyleDefault;
}

@end

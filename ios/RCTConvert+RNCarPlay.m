//
//  RCTConvert+RNCarPlay.m
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/27/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//

#import "RCTConvert+RNCarPlay.h"
#import <React/RCTConvert+CoreLocation.h>

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

@end

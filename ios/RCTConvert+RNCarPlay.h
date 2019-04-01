//
//  RCTConvert+RNCarPlay.h
//  RNCarPlay
//
//  Created by Birkir Gudjonsson on 3/27/19.
//  Copyright © 2019 SOLID Mobile. All rights reserved.
//
//
// Created by Leland Richardson on 12/27/15.
// Copyright (c) 2015 Facebook. All rights reserved.
//

#import <CoreLocation/CoreLocation.h>
#import <MapKit/MapKit.h>
#import <CarPlay/CarPlay.h>
#import <React/RCTConvert.h>

@interface RCTConvert (RNCarPlay)

+ (CPTripEstimateStyle)CPTripEstimateStyle:(id)json;
+ (CPPanDirection)CPPanDirection:(id)json;
+ (CPMapButton*)CPMapButton:(id)json withHandler:(void (^)(CPMapButton * _Nonnull mapButton))handler;
+ (CPRouteChoice*)CPRouteChoice:(id)json;
+ (MKMapItem*)MKMapItem:(id)json;
@end

/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"3n3Xz9DpBmjRcF6ZqNUiLaJcb3FDyF79"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"GH9ZQ7fKr030F7xpadSgfOzhiCdT8zFi"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"SzNBNoAIwQhHfZ16b15B3jmheTrmvC7z"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"wFwt5LAaJV70H4PppY9oem8xODGJkNW6"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"T0QI6NRGd1hKgapup73fT0re4IkEDMe3"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"YpvYKUmKDtn6Rfg7vH90EHh6l6JH72JR"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end

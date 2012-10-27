#import "ApplicationMods.h"

@implementation ApplicationMods

+ (NSArray*) compiledMods
{
	NSMutableArray *modules = [NSMutableArray array];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"ti.cloud",@"name",@"ti.cloud",@"moduleid",@"2.3.0",@"version",@"1056b5d2-2bb5-4339-b930-297637aeec4e",@"guid",@"",@"licensekey",nil]];
	[modules addObject:[NSDictionary dictionaryWithObjectsAndKeys:@"imagefactory",@"name",@"ti.imagefactory",@"moduleid",@"1.1",@"version",@"0aab25d7-0486-40ab-94a3-ed4f9a293414",@"guid",@"",@"licensekey",nil]];
	return modules;
}

@end

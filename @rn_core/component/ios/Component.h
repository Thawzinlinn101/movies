
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNComponentSpec.h"

@interface Component : NSObject <NativeComponentSpec>
#else
#import <React/RCTBridgeModule.h>

@interface Component : NSObject <RCTBridgeModule>
#endif

@end

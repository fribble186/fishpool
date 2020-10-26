if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$.js?appxworker=1');
require('./importScripts$.js?appxworker=1');

var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }
function success() {
require('../../app.js?appxworker=1');
require('../../components/toast/toast.js?appxworker=1');
require('../../components/post/post.js?appxworker=1');
require('../../components/bbs-card/bbs-card.js?appxworker=1');
require('../../pages/index/index.js?appxworker=1');
require('../../pages/post/list/list.js?appxworker=1');
require('../../pages/post/post/post.js?appxworker=1');
require('../../pages/bbs/list/list.js?appxworker=1');
require('../../pages/bbs/bbs/bbs.js?appxworker=1');
require('../../pages/bbs/bbs-post/bbs-post.js?appxworker=1');
require('../../pages/bbs/detail/detail.js?appxworker=1');
require('../../pages/map/map.js?appxworker=1');
}
self.bootstrapApp ? self.bootstrapApp({ success: success }) : success();
}
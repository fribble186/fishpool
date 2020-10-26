if(!self.__appxInited) {
self.__appxInited = 1;
require('@alipay/appx-compiler/lib/sjsEnvInit');

require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}

if(AFAppX.compilerConfig){ AFAppX.compilerConfig.component2 = true; }

function success() {
require('../../app');
require('../../components/toast/toast?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/post/post?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/bbs-card/bbs-card?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=9f263702e1211a51b6f5a15125bbd1e2ba7257dc');
require('../../pages/post/list/list?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/post/post/post?hash=413707b04da456bfc6a0c0af1b70030597aa53dd');
require('../../pages/bbs/list/list?hash=f026a30b14fb7b79d17144b6e791a20e82546592');
require('../../pages/bbs/bbs/bbs?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bbs/bbs-post/bbs-post?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/bbs/detail/detail?hash=f026a30b14fb7b79d17144b6e791a20e82546592');
require('../../pages/map/map?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
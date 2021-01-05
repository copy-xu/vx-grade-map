//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
   
  },
  //页面跳转
  goToIndex: function(e) {
    if(e.target.id == 1){
  
      wx.navigateTo({
     url: '/pages/index/index',
     })
   }
   else if(e.target.id == 2){
     wx.navigateTo({
       url: '/pages/intro/intro?id=0',
     })
   }
   else {
     wx.navigateTo({
       url: '/pages/intro/intro?id=1',
     })
   }
  },
 
 
  onReady: function() {
    var that = this;
   
    }
});
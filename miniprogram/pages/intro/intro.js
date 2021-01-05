
Page({

  /* 页面的初始数据
   */
  data: {

    obj:[{
      Id:0,
      picture1:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/下载.jpg",
      picture2:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/图书馆1.jpg",
      picture3:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/图书馆2.jpg",
      info:"青海大学图书馆",
      chats: "校图书馆始建于1958年，前身为青海工学院图书馆，1988年更名为青海大学图书馆。经过1997年、2001年、2004年先后三次大的院校整合，青海大学图书馆现由校本部图书馆和两个分馆、两个科学院馆组成。即：医学院图书馆、青大附院图书馆、农林科学院科技信息所和畜牧兽医科学院科技信息所。校本部图书馆现有职工22人，其中研究馆员4人，副研究馆员6人，副教授1人，中级职称9人；硕士及以上学历7人，大学本科15人； 下设文献检索教研室，有8人承担全校“文献检索与利用”课程的教学任务；科研工作持续推进，近三年获批国家级科研项目4项，省级科研项目4项，校级科研项目6项。"
    },{
      Id:1,
      picture1:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/src=http___img.mp.itc.cn_upload_20160929_f8853dc0930f4815b2be1116f35cd903_th.jpg&refer=http___img.mp.itc.jpg",
      picture2:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/12.jpg",
      picture3:"cloud://qingxiu1-1gdfqfwv9aa479b5.7169-qingxiu1-1gdfqfwv9aa479b5-1304658969/介绍/13.jpg",
      info:"青海大学 ",
      chats: "青海大学（Qinghai university），简称青大，位于青海省西宁市，是教育部与青海省人民政府“部省合建高校”，国家“世界一流学科建设高校”，国家“211工程”重点建设大学，国家“中西部高校综合实力提升工程”高校，“卓越医生教育培养计划”、“卓越工程师教育培养计划”、“卓越农林人才教育培养计划”改革试点高校，中西部高校联盟成员，中国高校传媒联盟理事单位，入选国家建设高水平大学公派研究生项目、新工科研究与实践项目、西部计算机教育提升计划、国家大学生创新性实验计划、国家级大学生创新创业训练计划，全国首批深化创新创业教育改革示范高校，中国政府奖学金来华留学生接收院校。"
    }
  ],
    nowId:0,
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({nowId:options.id});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
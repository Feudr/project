//logs.js

// import request from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //list是在data中声明的接收数据的变量
    list: []
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //用request请求接口url
    wx.request({
      url: 'https://www.apiopen.top/journalismApi',
      // header: {
      //   'content-type': 'application/json'
      // },
      success: res => {
        //在控制台上打印一下返回的res.data数据
        console.log(res.data)
        //请求接口成功后，用setDate接收数据
        this.setData({
          //第一个data是固定用法，第二个data是json中的data
          list: res.data.data
        })
      }
    })
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

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 属性region的值的类型是数组
    region: ["湖北省","武汉市","江夏区"],
      now: {
      tmp: '36',
      cond_txt: '多云',
      cond_code: 'weather',
      hum: '5',
      pres: 1020,
      vis: 10,
      wind_dir: '西北',
      wind_spd: 15,
      wind_sc: '2-3'
    }
  },
changeRegion: function(e){
    this.setData({
      region: e.detail.value
    }),
    // 地区更新完后调用getWeather函数更新天气
    this.getWeather();
},
getWeather: function(){
    // this不可以直接在wxAPI函数内部使用
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.net/s6/weather/now?',
      data: {
        // location显示的是市级
        location: that.data.region[1],
        key: "7400c02a200b40daafc2816fe9c71f70"
      },
      // 请求成功后返回一个结果
      success: function(res){
        // console.log(res.data)
        // 修改data中now的值
        that.setData({now:res.data.HeWeather6[0].now})
      }
    })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面一加载就调用getWeather(),页面信息不会为空
    this.getWeather();
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
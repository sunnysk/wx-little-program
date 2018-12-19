// pages/index/index.js
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
import util from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    logged: false
  },

  // 用户登录
  bindGetUserInfo: function() {
    if (this.data.logged) return;
    util.showBusy('正在登录');
    const session = qcloud.Session.get();
    console.log(session)
    if (session) {
      // 第二次登录
      // 或者本地已经有登录态
      // 可使用本函数更新登录态
      qcloud.loginWithCode({
        success: res => {
          this.setData({ userInfo: res, logged: true })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      })
    } else {
      // 首次登录
      qcloud.login({
        success: res => {
          this.setData({
            userInfo: res,
            logged: true
          })
          util.showSuccess('登录成功')
        },
        fail: err => {
          console.error(err)
          util.showModel('登录错误', err.message)
        }
      });
    }
  },
  doUpload: function() {
    var that = this

    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        util.showBusy('正在上传')
        var filePath = res.tempFilePaths[0];

        // 上传图片
        wx.uploadFile({
          url: config.service.uploadUrl,
          filePath: filePath,
          name: 'file',

          success: function(res) {
            util.showSuccess('上传图片成功')
            console.log(res)
            res = JSON.parse(res.data)
            console.log(res)
            that.setData({
              imgUrl: res.data.imgUrl
            })
          },

          fail: function(e) {
            util.showModel('上传图片失败')
          }
        })

      },
      fail: function(e) {
        console.error(e)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
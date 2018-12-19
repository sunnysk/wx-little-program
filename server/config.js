const CONF = {
  port: '5757',
  rootPathname: '',

  // 微信小程序 App ID
  appId: 'wx1b3ee8197d1749c4',

  // 微信小程序 App Secret
  appSecret: '288dad0363c2594e450abedcf54c0a44',

  // 是否使用腾讯云代理登录小程序
  useQcloudLogin: false,

  /**
   * MySQL 配置，用来存储 session 和用户信息
   * 若使用了腾讯云微信小程序解决方案
   * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
   */
  mysql: {
    host: 'localhost',
    port: 3306,
    user: 'root',
    db: 'cAuth',
    pass: 'wx1b3ee8197d1749c4',
    char: 'utf8mb4'
  },

  cos: {
    /**
     * 地区简称
     * @查看 https://cloud.tencent.com/document/product/436/6224
     */
    // region: 'ap-guangzhou',
    region: 'ap-beijing-1',
    // Bucket 名称
    fileBucket: 'qcloudtest',
    // 文件夹
    uploadFolder: ''
  },

  // 微信登录态有效期
  wxLoginExpires: 7200,
  wxMessageToken: 'abcdefgh',
  qcloudAppId: '1258330032',
  qcloudSecretId: 'AKIDErNpBuV4WwXzJpvnCRZZSHxVtKeBQt7i',
  qcloudSecretKey: 'naGpvCTFtNl2ASoKi2KW1Tmy590iOK7w',
}

module.exports = CONF
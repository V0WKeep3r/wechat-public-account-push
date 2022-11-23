/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx329d45d9e3d06882',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'a17a5f33b9f509809e66d59ea472b545',

  PROVINCE: '江苏',
  CITY: '南京',
  

  USERS: [
    {
      // 想要发送的人的名字
      name: '娜娜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLS0b6w992EWmZ8CG-KhRJleDLBo',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MAeZY5oVzWgIiJAQNw22cCxginRGPikakZpymoH4EWE',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-19',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娜娜农历', year: '1995', date: '10-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '娜娜阳历', year: '1995', date: '12-19',
        },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-19' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    
    {
      // 想要发送的人的名字
      name: '娜娜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oLS0b68gSXDenEMEtIA-XZzZbUKY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MAeZY5oVzWgIiJAQNw22cCxginRGPikakZpymoH4EWE',
      // 新历生日, 仅用作获取星座运势, 格式必须
      horoscopeDate: '12-19',
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      horoscopeDateType: '今日',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娜娜农历', year: '1995', date: '10-28',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '娜娜阳历', year: '1995', date: '12-19',
        },
//         {
//           type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
//         },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-11-19' },
        // 结婚纪念日
//         { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


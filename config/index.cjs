/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */

const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxd2eb4b3da7839458',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '21384785fe4c10ec10a70be5c9ddc951',

  PROVINCE: '重庆',
  CITY: '北碚区',

  SWITCH: {
    // 开启天气功能
    weather: true,
    // 开启土味情话
    earthyLoveWords: true,
  },

   // 配置天行API
  TIAN_API: {
    // 配置你的天行API KEY
    key: 'ef6f49af5152ab483541f1274980f8cb',
    // 开启天气功能，这里的数字代表获取未来几天的天气，建议填3
    weather: 3,
  },

  USERS: [
    {
      // 想要发送的人的名字
      name: '小瓜',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocruJ6rMbh9roCRR8ofp450eKvek',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'OYsEIghYjS_tV30IPsmQGOu6GpXnc82bnZkLI83o_pU',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '青山', year: '1998', date: '08-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '青山', year: '1998', date: '10-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2001-01-08' },
        // 打王者纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
      // 想要发送的人的名字
      name: '青山',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'ocruJ6jcyW-I5ZFMo-LlmHVF29Es',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MLD3VRdlBH4SvX0pp-9DsduzhuEsaKbRwJVrYuAjyss',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-10',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '青山', year: '1998', date: '08-10',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '青山', year: '1998', date: '10-10',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '1998-10-10' },
        // 打王者纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  //CALLBACK_TEMPLATE_ID: 'd8kK6iMqi289_PwKLrLDrDBuYjd-e_JPecO2jrDTVpM',

 // CALLBACK_USERS: [
   // {
     // name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
     // id: 'ocruJ6oaM2ntja6CzVxu2kYoQQQ8',
   // }
 // ],

}

module.exports = USER_CONFIG


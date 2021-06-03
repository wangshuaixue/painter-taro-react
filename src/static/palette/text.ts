/*
 * @author: wangshuaixue
 * @Date: 2021-05-31 13:52:32
 * @description: 
 * @LastEditTime: 2021-06-03 15:21:24
 * @LastEditors: wangshuaixue
 */

// @ts-ignorea
export default class counselor {
  palette(counselorInfo) {
    // templateList
    // 过滤咨询师信息
    

    // 用户头像
    let arr = false;
    // 咨询师头像
    
    // 咨询师名称
    let name = '钢铁侠某某某'


    let tag = ['数据专家', '服务热情'];
    let stats = [
        {
          number:"655",
          value:"服务客户"
        },
        {
          number:"147",
          value:"实勘楼盘"
        },
        {
          number:"40.00",
          value:"客户满意度"
        },
        {
          number:"663",
          value:"客户好评"
        }
    ];
    let prize = ['1000京东卡','1000京东卡2', '最多展示9个字测试下']

    // 固定模版信息
    let mobox = [
      // 用户信息
      {
        type: 'image',
        url: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMjEwMzA5MTQwNzA0MzY3LmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
        css: {
          top: '18rpx',
          left: '33rpx',
          width: '100rpx',
          height: '100rpx',
          borderRadius: '60rpx',
          borderWidth: '2rpx',
          borderColor: arr ? '#00DEFF' : 'transparent'
        }
      },
      {
        type: 'text',
        text: '花小猪ViVa',
        css: {
          top: '25rpx',
          left: '148rpx',
          fontSize: '42rpx',
          color: '#fff',
        }
      },
      {
        type: 'text',
        text: '我正在接受居理买房网的服务',
        css: {
          top: '80rpx',
          left: '148rpx',
          fontSize: '24rpx',
          color: '#fff',
        }
      },
      
      {
        type: 'text',
        text: "咨询师太棒啦8888",
        css: {
          width:'750rpx',
          top: `210rpx`,
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: '62rpx',
          color: '#fff',
        },
      },
      // 中心咨询师卡片
      {
        type: 'image',
        url: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMjEwMzA5MTQwNzA0MzY3LmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
        css: {
          top: '414rpx',
          left: '56rpx',
          width: '208rpx',
          height: '208rpx',
          borderRadius: '100rpx',
          borderWidth: '4rpx',
          borderColor: arr ? '#00DEFF' : 'transparent'
        }
      },
      {
        type: 'text',
        text: name,
        css: {
          top: '476rpx',
          left: '282rpx',
          fontSize: '60rpx',
          color: '#fff',
        }
      },
      {
        type: 'image',
        url: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMjEwMzA5MTQwNzA0MzY3LmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
        css: {
          top: '485rpx',
          left: `${292+(name.length * 60)}rpx`,
          width: '42rpx',
          height: '42rpx',
          borderRadius: '100rpx',
          borderWidth: '4rpx',
          borderColor: arr ? '#00DEFF' : 'transparent'
        }
      },
      // 扫码文案
      {
        type: 'text',
        text: '快去扫码咨询，立刻享受',
        css: {
          top: '894rpx',
          left: '45rpx',
          fontSize: '50rpx',
          color: '#fff'
        }
      },
      // 二维码
      {
        type: 'image',
        url: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMjEwMzA5MTQwNzA0MzY3LmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
        css: {
          bottom: '160rpx',
          right: '73rpx',
          width: '152rpx',
          height: '152rpx'
        }
      },
      {
        type: 'text',
        text: '扫码了解详情',
        css: {
          bottom: '123rpx',
          right: '77rpx',
          color: '#fff',
          fontSize: '24rpx'
        }
      },
    ]

    // 动态处理各种情况
    // 咨询师标签
    let tagList = tag.map((tagText, index)=>{
      let left = 0;
      if (index == 1) {
        left = tag[0].length * 22 + 40 + 10;
      } else if (index == 2) {
        left = (tag[0].length * 22 + 40 + 10 ) + (tag[1].length * 22 + 40 + 10 )
      }
      return {
        type: 'text',
        text: `  ${tagText}  `,
        css: {
          top: '558rpx',
          left: `${281+left}rpx`,
          fontSize: '22rpx',
          lineHeight: '28rpx',
          color: '#04B8DE',
          borderWidth: '2rpx',
          borderColor: '#04B8DE',
          borderRadius: '20rpx',
        }
      }
    });


    mobox.push(...tagList)


    // 服务状态
    let status = stats.map((text, index)=>{
      let left = 150;
      return {
        type: 'text',
        text: ` ${text.number} `,
        css: {
          top: '687rpx',
          left: `${ 75 + (left * index)}rpx`,
          fontSize: '44rpx',
          fontWeight: 'bold',
          width: '150rpx',
          textAlign: 'center',
          color: '#fff',
        }
      }
    });
    let descStatus = stats.map((text, index)=>{
      let left = 150;
      return {
        type: 'text',
        text: ` ${text.value} `,
        css: {
          top: '756rpx',
          left: `${ 75 + (left * index)}rpx`,
          fontSize: '20rpx',
          width: '150rpx',
          textAlign: 'center',
          color: '#fff',
        }
      }
    })

    mobox.push(...status);
    mobox.push(...descStatus);

    // 活动奖励
    let prizeList = prize.map((text, index)=>{
      let top = 54;
      return {
        type: 'text',
        text: `· ${text}`,
        css: {
          top: `${1021 + top * index}rpx`,
          left: '36rpx',
          fontSize: '46rpx',
          color: '#fff',
        }
      }
    })

    mobox.push(...prizeList); 

    
    return ({
      width: '750rpx',
      height: '1334rpx',
      background: '#666',
      views: mobox
    });
  }
}


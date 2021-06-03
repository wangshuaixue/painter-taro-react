import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import Painter from '../../components/common/painter'
import textPalette from '../../static/palette/text';
import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  constructor(props){
    super(props);
    this.state={
      painterRef: React.createRef(),
      paletteData: {},
      tag: ['数据专家', '服务热情'],
      stats: [
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
    ],
    prize: ['1000京东卡','1000京东卡2', '最多展示9个字测试下']
    }
  }
  state: any;
  componentWillMount () {
    this.setState({
      paletteData: new textPalette().palette()
    })
    console.log(this.state.paletteData, 'paletteData')
    // this.setState({
    //   paletteData: data
    // })
    // let data = new textPalette().palette();

    

    // // 咨询师标签
    // let tagList = this.state.tag.map((tagText, index)=>{
    //   let {tag} = this.state;
    //   let left = 0;
    //   if (index == 1) {
    //     left = tag[0].length * 22 + 40 + 10;
    //   } else if (index == 2) {
    //     left = (tag[0].length * 22 + 40 + 10 ) + (tag[1].length * 22 + 40 + 10 )
    //   }
    //   return {
    //     type: 'text',
    //     text: `  ${tagText}  `,
    //     css: {
    //       top: '558rpx',
    //       left: `${281+left}rpx`,
    //       fontSize: '22rpx',
    //       lineHeight: '28rpx',
    //       color: '#04B8DE',
    //       borderWidth: '2rpx',
    //       borderColor: '#04B8DE',
    //       borderRadius: '20rpx',
    //     }
    //   }
    // });


    // data.views.push(...tagList)


    // // 服务状态
    // let status = this.state.stats.map((text, index)=>{
    //   let left = 150;
    //   return {
    //     type: 'text',
    //     text: ` ${text.number} `,
    //     css: {
    //       top: '687rpx',
    //       left: `${ 75 + (left * index)}rpx`,
    //       fontSize: '44rpx',
    //       fontWeight: 'bold',
    //       width: '150rpx',
    //       textAlign: 'center',
    //       color: '#fff',
    //     }
    //   }
    // });
    // let descStatus = this.state.stats.map((text, index)=>{
    //   let left = 150;
    //   return {
    //     type: 'text',
    //     text: ` ${text.value} `,
    //     css: {
    //       top: '756rpx',
    //       left: `${ 75 + (left * index)}rpx`,
    //       fontSize: '20rpx',
    //       width: '150rpx',
    //       textAlign: 'center',
    //       color: '#fff',
    //     }
    //   }
    // })

    // data.views.push(...status);
    // data.views.push(...descStatus);

    // // 活动奖励
    // let prizeList = this.state.prize.map((text, index)=>{
    //   let top = 54;
    //   return {
    //     type: 'text',
    //     text: `· ${text}`,
    //     css: {
    //       top: `${1021 + top * index}rpx`,
    //       left: '36rpx',
    //       fontSize: '46rpx',
    //       color: '#fff',
    //     }
    //   }
    // })

    // data.views.push(...prizeList); 

    
   }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onImgOk(e){
    console.log('绘图成功，图片地址为：', e.path);
  }
  saveImg(){
    const { painterRef } = this.state;
    painterRef.current.saveImage();
  }
  render () {
    const { painterRef, paletteData } = this.state;
    return (
      <View className='index'>
        <Button onClick={this.saveImg.bind(this)}>保存图片</Button>
        <Painter
          customStyle=''
          palette={paletteData}
          onImgOK={this.onImgOk.bind(this)}
          onImgErr={(err)=>{console.error('绘制失败',err)}}
          ref={painterRef}
        />
      </View>
    )
  }
}

export default Index

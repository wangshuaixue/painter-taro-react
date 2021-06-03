export default class LastMayday {
    palette() {
      return ({
        width: '750rpx',
        height: '900rpx',
        background: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwODIyNzVcLzIwMjAxMTIwMTE1ODQwOTYyLmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
        views: [
          _textDecoration('overline', 0),
          _textDecoration('underline', 1),
          _textDecoration('line-through', 2),
          _textDecoration('overline underline line-through', 3, 'red'),
          {
            type: 'text',
            text: "fontWeight: 'bold'",
            css: [{
              top: `${startTop + 4 * gapSize}rpx`,
              fontWeight: 'bold',
            }, common],
          },
          {
            type: 'text',
            text: '我是把width设置为300rpx后，我就换行了',
            css: [{
              top: `${startTop + 5 * gapSize}rpx`,
              left: '100rpx',
              width: '500rpx',
            }, common],
          },
          {
            type: 'text',
            text: '我设置了maxLines为1，看看会产生什么效果',
            css: [{
              top: `${startTop + 7 * gapSize}rpx`,
              width: '400rpx',
              maxLines: 1,
            }, common],
          },
          {
            type: 'text',
            text: "textStyle: 'stroke'",
            css: [{
              top: `${startTop + 8 * gapSize}rpx`,
              left: '200rpx',
              textStyle: 'stroke',
              fontWeight: 'bold',
            }, common],
          },
          {
            type: 'image',
            url: 'https://imgs.julive.com/l?p=eyJpbWdfcGF0aCI6IlwvVXBsb2FkXC9wcm9qZWN0X2ltZ1wvNVwvMjAwMDg5MTZcLzIwMjEwMzA5MTQwNzA0MzY3LmpwZyIsImltZ19wYXJhbV9hcnIiOnsid2F0ZXJtYXJrIjoyfSwieC1vc3MtcHJvY2VzcyI6IlwvcXVhbGl0eSxxXzkwIn0%3D',
            css: [{
              bottom: '0',
              left: '200rpx',
              textStyle: 'stroke',
              fontWeight: 'bold',
            }, common],
          },
        ],
      });
    }
  }
  
  const startTop = 50;
  const gapSize = 70;
  const common = {
    fontSize: '40rpx',
  };
  
  function _textDecoration(decoration, index, color?: String ) {
    return ({
      type: 'text',
      text: decoration,
      css: [{
        top: `${startTop + index * gapSize}rpx`,
        color: color,
        textDecoration: decoration,
      }, common],
    });
  }
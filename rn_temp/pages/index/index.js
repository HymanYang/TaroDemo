import Taro from '@tarojs/taro-rn';
import React from 'react';
import { Component } from "@tarojs/taro-rn";
import { View, Text } from "@tarojs/components-rn";
import indexStyleSheet from "./index_styles";
var _styleSheet = indexStyleSheet;
let Index = class Index extends Component {
  constructor() {
    super(...arguments);
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */

    this.onClickBtn = () => {
      Taro.navigateTo({
        url: '/pages/detail/second'
      });
    };
  }
  componentWillMount() {}
  componentDidMount() {}
  componentWillUnmount() {}
  componentDidShow() {}
  componentDidHide() {}
  render() {
    return <View style={_styleSheet["index"]}>
        <View style={_styleSheet["indexBtnC"]}>
          <Text onClick={this.onClickBtn.bind(this)} style={_styleSheet["indexBtn"]}>进入下一个页面</Text>
        </View>
        <Text>这是以第一个页面 ，欢迎使用taro</Text>
      </View>;
  }
};
Index.config = {
  navigationBarTitleText: '首页'
};
export { Index as default };
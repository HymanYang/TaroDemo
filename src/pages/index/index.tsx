import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  onClickBtn = ()=>{
    Taro.navigateTo({
      url:'/pages/detail/second'
    })
  }

  render () {
    return (
      <View className='index'>
        <View className='indexBtnC'>
          <Text className='indexBtn' onClick={this.onClickBtn.bind(this)}>进入下一个页面</Text>
        </View>
        <Text>这是以第一个页面 ，欢迎使用taro</Text>
      </View>
    )
  }
}


### Taro阅读

#### 0、时间线

```java
v0.0.1 [2018.04.08] 
v1.0.0 [2018.09.18] 
v1.2.0 [2018.12.18]-巨大的赞誉和关注
v1.3.0 [2019.06.18]-全面支持 JSX 语法和 HOOKS-[https://aotu.io/notes/2019/06/13/taro-1-3/]
v2.0.0 [2020.01.09]
v3.0.0 [2020.02.21]-内部测试版已经体验中                                       
```

#### 1、原理

```java
①、Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架。
②、使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ/京东小程序、快应用、H5、React-Native 等）运行的代码。
```

#### 2、语法

```java
Taro 遵循 React 语法规范，它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时支持使用 JSX 语法，让代码具有更丰富的表现力，使用 Taro 进行开发可以获得和 React 一致的开发体验
    
注：
* 部分优秀的JSX不支持，https://taro-docs.jd.com/taro/docs/best-practice.html
* 其他也有语法的差异
```

#### 3、RN运行流程-2种方式

```java
1、在Taro输出RN代码，并启动Metro Bundler 负责打包在线jsbundle ，利用壳工程做载体，展示RN界面
2、在Taro中利用命令，生成bundle,在项目中运行

注：
①、根据运行网易Taro demo，出现bug，定位比较困难
②、ReactNative适配0.5.9，可自主升级，副作用不明确
    
远程加载bundle原理/asset下bundle可以直接加载
```

```java
react-native bundle
–entry-file ,ios或者android入口的js名称，比如index.ios.js
–platform ,平台名称(ios或者android)
–dev ,设置为 false的时候将会对JavaScript代码进行优化处理
–bundle-output, 生成的jsbundle文件的名称，比如./ios/index.ios.jsbundle
–assets-dest 图片以及其他资源存放的目录,比如./ios 默认会生成一个新的文件夹assets

taro:
node ./node_modules/react-native/local-cli/cli.js bundle --entry-file ./rn_temp/index.js --bundle-output ./index.android.bundle  --platform android --assets-dest ./android --dev false

简单Demo-bundle [hello world]
dev-true: 3.97M  de-false:1.41M
```

#### 4、小程序

```java
1、单独作为一个小程序，开发并使用；
2、开发成为小程序插件方式 ，利弊都有；
3、开完完成，直接拷贝代码至于云集项目；
```

#### 5、Taro文档阅读

```java
1、书写规范，有各种`空格`要求,开发者优先查看 https://taro-docs.jd.com/taro/docs/spec-for-taro.html -不遵守副作用待验证。。。。
2、style的使用-找不到对应文档，只能参考demo
3、
```

#### 6、随手记事

```java
1、taro解决，多端无法消除的差异-方案
2、不遵守taro某些规范异常，导致无法按照预期运行
3、Taro 从 2.0 开始，依赖的 React Native 版本由 0.55.4 升级为 0.59.9。
4、RN再次运行困难-https://www.jianshu.com/p/8186b70eb316
5、Taro运行报错定位困难，初步运行网页Taro demo，只报了一个大范围的错误，无法精确JS
6、整个调试模式-小程序+H5查看都比较便捷，RN复杂
7、开发的页面应该相对独立，-控件复用性比较差-
8、Taro页面路由跳转时，注意不要少了起始 “/”
9、如果要支持 React Native 端，必须采用 Flex 布局，并且样式选择器仅支持类选择器
```

#### 7、React Native开发经常使用

```java
1、端口管理
查看进程：netstat -aon |findstr "8081"
杀掉进程：taskkill /pid pid值 /F
```



#### 8、Taro第一阶段摸底结论

> 什么是**Taro**？
>
> * Taro 是由凹凸实验室打造的一套遵循 React 语法规范的多端统一开发框架，它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时支持使用 JSX 语法，支持使用 ES7/ES8 甚至更新的 ES 规范-【某一些语法也不支持】
>
> * 使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动/QQ/京东小程序、快应用、H5、React-Native 等）运行的代码。
>
> * **Taro** 立足于微信小程序开发
>
> 
>
> ReactNative？
>
> * Taro兼容0.5.9，与云集不一致，可自主升级，副作用不明确-需实践验证
>
> * 生成的React为单一项目，走单独发布bundle流程，暂时不可拆包，bundle会超过1M
>
> 
>
> 小程序？
>
> * 支持开发单独的小程序项目
>
> * 支持开发小程序插件
>
> * 不支持拷贝小程序代码至云集项目中作为一个页面
>
> 
>
> H5?
>
> * 新开项目，可以支持H5页面匹配Q@

=========================================================================================================================

#### Taro-模拟实践

```java
1、布局padding，一定的带单位，否则失效
2、选择tab，没有明显的资料，需要去选择
3、空格引发，页面展示不成功
4、整理比例不协调 ，有全局配置文件，需要配置 。。。。
5、classId，同名-布局受到影响
6、Text引入的实践
8、全局视觉，都需要手动开发 ，RN-共兼容控件太少了
9、vs Code安装能够提前发现问题
10、100% 相对于父类
11、Swiper短暂使用，发现有bug，不知道是使用不当，还是本身有问题
12、文档Api不健全，需要自己查找资料，来确定获取
13、整个容器的宽高，

```

#### Swiper踩坑

```
1、轮播3-直接到1，无法切换
2、onChange在RN失效
```





#### 7、React Native开发经常使用

```java
1、端口管理
查看进程：netstat -aon |findstr "8081"
杀掉进程：taskkill /pid pid值 /F
    
https://www.npmjs.com/package/package

http://127.0.0.1:8081/rn_temp/index.bundle?platform=android&dev=true 

vsCode快捷键文档：https://geek-docs.com/vscode/vscode-tutorials/vscode-code-formatting.html

web文档：https://developer.mozilla.org/zh-CN/docs/Web

node ./node_modules/react-native/local-cli/cli.js bundle --entry-file ./rn_temp/index.js --bundle-output ./index.android.bundle  --platform android --assets-dest ./android --dev false
```





import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, ToastAndroid, TouchableHighlight, WebView, YellowBox } from 'react-native';
import { TabNavigator, TabBarBottom, createStackNavigator } from 'react-navigation';

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');

class FlatListBasics extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '搭建开发环境', value: 'https://reactnative.cn/docs/0.51/getting-started/'},
            {key: '示例教程：Hello World', value: 'https://reactnative.cn/docs/0.51/tutorial/'},
            {key: 'Props(属性)', value: 'https://reactnative.cn/docs/0.51/props/'},
            {key: 'State(状态)', value: 'https://reactnative.cn/docs/0.51/state/'},
            {key: '样式', value: 'https://reactnative.cn/docs/0.51/style/'},
            {key: '高度与宽度', value: 'https://reactnative.cn/docs/0.51/height-and-width/'},
            {key: '使用Flexbox布局', value: 'https://reactnative.cn/docs/0.51/layout-with-flexbox/'},
            {key: '处理文本输入', value: 'https://reactnative.cn/docs/0.51/handling-text-input/'},
			{key: '使用滚动视图', value: 'https://reactnative.cn/docs/0.51/using-a-scrollview/'},
            {key: '使用长列表', value: 'https://reactnative.cn/docs/0.51/using-a-listview/'},
            {key: '网络', value: 'https://reactnative.cn/docs/0.51/network/'},
            {key: '其他参考资源', value: 'https://reactnative.cn/docs/0.51/more-resources/'},
          ]}
		  renderItem={({item})=> (
			<TouchableHighlight underlayColor="#E1F6FF" onPress={() => this.props.navigate('Details', {key: item.key, value: item.value})}>
				<Text style={styles.item}>{item.key}</Text>
			</TouchableHighlight>
		  )}
        />
      </View>
    );
  }
}

class BasicListScreen extends React.Component {
  static navigationOptions = {
	title: '入门基础', 
	headerStyle: {
      backgroundColor: '#d81e06',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
	  flex: 1,
	  textAlign:'center',
    },
  };
  render() {
    return (
      <FlatListBasics navigate={this.props.navigation.navigate}/>
    );
  }
}

class BasicDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'Details'),
	  headerStyle: {
        backgroundColor: '#d81e06',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
	const { navigation } = this.props;
    const value = navigation.getParam('value', 'http://www.baidu.com');
  
    return (
	  <WebView
		source={{uri: value}}
		style={{width:'100%',height:'100%'}}
	  />
    );
  }
}

const BasicStack = createStackNavigator({
  Base: BasicListScreen,
  Details: BasicDetailScreen,
});

BasicStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};



class FlatListAdvance extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '集成到现有原生应用', value: 'https://reactnative.cn/docs/0.51/integration-with-existing-apps/'},
            {key: '使用导航器跳转页面', value: 'https://reactnative.cn/docs/0.51/navigation/'},
            {key: '颜色', value: 'https://reactnative.cn/docs/0.51/colors/'},
            {key: '图片', value: 'https://reactnative.cn/docs/0.51/images/'},
            {key: '处理触摸事件', value: 'https://reactnative.cn/docs/0.51/handling-touches/'},
            {key: '动画', value: 'https://reactnative.cn/docs/0.51/animations/'},
            {key: '无障碍功能', value: 'https://reactnative.cn/docs/0.51/accessibility/'},
            {key: '定时器', value: 'https://reactnative.cn/docs/0.51/timers/'},
			{key: '直接操作', value: 'https://reactnative.cn/docs/0.51/direct-manipulation/'},
            {key: '调试', value: 'https://reactnative.cn/docs/0.51/debugging/'},
            {key: 'Testing your Changes', value: 'https://reactnative.cn/docs/0.51/testing/'},
            {key: 'JavaScript环境', value: 'https://reactnative.cn/docs/0.51/javascript-environment/'},
			{key: '性能', value: 'https://reactnative.cn/docs/0.51/performance/'},
            {key: '更新', value: 'https://reactnative.cn/docs/0.51/upgrading/'},
            {key: '特定平台代码', value: 'https://reactnative.cn/docs/0.51/platform-specific-code/'},
            {key: '手势响应系统', value: 'https://reactnative.cn/docs/0.51/gesture-responder-system/'},
          ]}
		  renderItem={({item})=> (
			<TouchableHighlight underlayColor="#E1F6FF" onPress={() => this.props.navigate('AdvanceDetails', {key: item.key, value: item.value})}>
				<Text style={styles.item}>{item.key}</Text>
			</TouchableHighlight>
		  )}
        />
      </View>
    );
  }
}

class AdvanceListScreen extends React.Component {
  static navigationOptions = {
	title: '进阶指南', 
	headerStyle: {
      backgroundColor: '#d81e06',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
	  flex: 1,
	  textAlign:'center',
    },
  };
  render() {
    return (
      <FlatListAdvance navigate={this.props.navigation.navigate}/>
    );
  }
}

class AdvanceDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'AdvanceDetails'),
	  headerStyle: {
        backgroundColor: '#d81e06',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
	const { navigation } = this.props;
    const value = navigation.getParam('value', 'http://www.baidu.com');
  
    return (
	  <WebView
		source={{uri: value}}
		style={{width:'100%',height:'100%'}}
	  />
    );
  }
}

const AdvanceStack = createStackNavigator({
  AdvanceBase: AdvanceListScreen,
  AdvanceDetails: AdvanceDetailScreen,
});

AdvanceStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};



class FlatListIOS extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '原生模块', value: 'https://reactnative.cn/docs/0.51/native-modules-ios/'},
            {key: '原生UI组件：Hello World', value: 'https://reactnative.cn/docs/0.51/native-component-ios/'},
            {key: '链接原生库', value: 'https://reactnative.cn/docs/0.51/linking-libraries-ios/'},
            {key: '在设备上运行', value: 'https://reactnative.cn/docs/0.51/running-on-device-ios/'},
            {key: '在ios模拟器上运行', value: 'https://reactnative.cn/docs/0.51/running-on-simulator-ios/'},
            {key: '和原生端通信', value: 'https://reactnative.cn/docs/0.51/communication-ios/'},
            {key: 'ios应用扩展', value: 'https://reactnative.cn/docs/0.51/app-extensions/'},
          ]}
		  renderItem={({item})=> (
			<TouchableHighlight underlayColor="#E1F6FF" onPress={() => this.props.navigate('IOSDetails', {key: item.key, value: item.value})}>
				<Text style={styles.item}>{item.key}</Text>
			</TouchableHighlight>
		  )}
        />
      </View>
    );
  }
}

class IOSListScreen extends React.Component {
  static navigationOptions = {
	title: '使用指南(IOS)', 
	headerStyle: {
      backgroundColor: '#d81e06',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
	  flex: 1,
	  textAlign:'center',
    },
  };
  render() {
    return (
      <FlatListIOS navigate={this.props.navigation.navigate}/>
    );
  }
}

class IOSDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'IOSDetails'),
	  headerStyle: {
        backgroundColor: '#d81e06',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
	const { navigation } = this.props;
    const value = navigation.getParam('value', 'http://www.baidu.com');
  
    return (
	  <WebView
		source={{uri: value}}
		style={{width:'100%',height:'100%'}}
	  />
    );
  }
}

const IOSStack = createStackNavigator({
  IOSBase: IOSListScreen,
  IOSDetails: IOSDetailScreen,
});

IOSStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};




class FlatListAndroid extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '原生模块', value: 'https://reactnative.cn/docs/0.51/native-modules-android/'},
            {key: '原生UI组件：Hello World', value: 'https://reactnative.cn/docs/0.51/native-component-android/'},
            {key: 'Headless JS(后台任务)', value: 'https://reactnative.cn/docs/0.51/headless-js-android/'},
            {key: '在设备上运行', value: 'https://reactnative.cn/docs/0.51/running-on-device-android/'},
            {key: '打包APK', value: 'https://reactnative.cn/docs/0.51/signed-apk-android/'},
            {key: '调试Android UI性能', value: 'https://reactnative.cn/docs/0.51/android-ui-performance/'},
            {key: '从源代码编译React Native', value: 'https://reactnative.cn/docs/0.51/android-building-from-source/'},
			{key: '和原生端通信', value: 'https://reactnative.cn/docs/0.51/communication-android/'},
          ]}
		  renderItem={({item})=> (
			<TouchableHighlight underlayColor="#E1F6FF" onPress={() => this.props.navigate('AndroidDetails', {key: item.key, value: item.value})}>
				<Text style={styles.item}>{item.key}</Text>
			</TouchableHighlight>
		  )}
        />
      </View>
    );
  }
}

class AndroidListScreen extends React.Component {
  static navigationOptions = {
	title: '使用指南(Android)', 
	headerStyle: {
      backgroundColor: '#d81e06',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
	  flex: 1,
	  textAlign:'center',
    },
  };
  render() {
    return (
      <FlatListAndroid navigate={this.props.navigation.navigate}/>
    );
  }
}

class AndroidDetailScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('key', 'AndroidDetails'),
	  headerStyle: {
        backgroundColor: '#d81e06',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };
  render() {
	const { navigation } = this.props;
    const value = navigation.getParam('value', 'http://www.baidu.com');
  
    return (
	  <WebView
		source={{uri: value}}
		style={{width:'100%',height:'100%'}}
	  />
    );
  }
}

const AndroidStack = createStackNavigator({
  AndroidBase: AndroidListScreen,
  AndroidDetails: AndroidDetailScreen,
});

AndroidStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  let animationEnabled = true;
  let swipeEnabled = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
    animationEnabled = false;
    swipeEnabled = false;
  }else {
	animationEnabled = true;
    swipeEnabled = true;
  }

  return {
    tabBarVisible,
	animationEnabled,
	swipeEnabled,
  };
};


export default TabNavigator(
{
  基础: BasicStack,
  进阶: AdvanceStack,
  IOS: IOSStack,
  Android: AndroidStack,
},
{
	navigationOptions: ({ navigation }) => ({
	  tabBarIcon: ({ focused, tintColor }) => {
		const { routeName } = navigation.state;
		let iconName;
		if (routeName === '基础') {
		  iconName = focused ? require('./images/tab_one_select.png') : require('./images/tab_one.png');
		} else if (routeName === '进阶') {
		  iconName = focused ? require('./images/tab_two_select.png') : require('./images/tab_two.png');
		} else if (routeName === 'IOS') {
		  iconName = focused ? require('./images/tab_three_select.png') : require('./images/tab_three.png');
		} else if (routeName === 'Android') {
		  iconName = focused ? require('./images/tab_four_select.png') : require('./images/tab_four.png');
		}

		return <Image source={iconName} style={{width: 25, height: 25}} />;
	  },
	}),
	tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
	tabBarOptions: {
	  activeTintColor: '#d81e06',
	  inactiveTintColor: 'black',
	},
	animationEnabled: true,
    swipeEnabled: true,
}
);

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  item: {
    padding: 15,
    fontSize: 16,
    height: 55,
  }
})

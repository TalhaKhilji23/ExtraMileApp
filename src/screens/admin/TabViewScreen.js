import { useState } from "react";
import { TabBar, TabView } from "react-native-tab-view";

export default function TabViewScreen() {
    const renderTabBar = props => (
      <TabBar
        activeColor={'black'}
        inactiveColor={'grey'}
        {...props}
        indicatorStyle={{backgroundColor: null}}
        labelStyle={[{textTransform: 'capitalize'}, {fontWeight: 'bold'}]}
        style={{
          backgroundColor: '#fff',
          borderBottomColor: '#eee',
          borderBottomWidth: 1,
          elevation: 0,
          borderRadius: 40,
          marginTop: 15,
          marginBottom: 15,
        }}
      />
    );
  
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      {key: 'first', title: 'First'},
      {key: 'second', title: 'Second'},
    ]);
  
    return (
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    );
  }
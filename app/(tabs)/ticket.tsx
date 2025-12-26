import CommodityScreen from '@/components/screen/ticket/Commodity';
import PassangerScreen from '@/components/screen/ticket/Passanger';
import * as React from 'react';
import { Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const renderScene = SceneMap({
  first: PassangerScreen,
  second: CommodityScreen,
});

const routes = [
  { key: 'first', title: 'Penumpang' },
  { key: 'second', title: 'Barang' },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderTabBar = (props: any) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        {props.navigationState.routes.map((route: any, i: number) => {
          const isActive = index === i;

          return (
            <TouchableOpacity
              key={route.key}
              style={{
                flex: 1,
                paddingVertical: 12,
                borderBottomWidth: 2,
                borderBottomColor: isActive ? '#0891b2' : '#e0e0e0',
                alignItems: 'center',
              }}
              onPress={() => setIndex(i)}
            >
              <Text style={{ color: isActive ? '#0891b2' : 'black' }}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <> 
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  );
}

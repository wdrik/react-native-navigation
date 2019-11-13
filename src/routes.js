// ***createSwitchNavigator         --------------------------------------------------------------------------------
// import { createSwitchNavigator, createAppContainer } from "react-navigation";

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// const mainNavigation = createSwitchNavigator(
//   {
//     Home,
//     Teste
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

// export default createAppContainer(mainNavigation);

// ***createAnimatedSwitchNavigator   --------------------------------------------------------------------------------
// import React from "react";
// import { createAppContainer } from "react-navigation";
// import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
// import { Transition } from "react-native-reanimated";

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// const mainNavigation = createAnimatedSwitchNavigator(
//   {
//     Home,
//     Teste
//   },
//   {
//     transition: (
//       <Transition.Together>
//         <Transition.Out
//           type="slide-top"
//           durationMs={1000}
//           interpolation="easeIn"
//         />
//         <Transition.In type="fade" durationMs={1000} />
//       </Transition.Together>
//     )
//   }
// );

// export default createAppContainer(mainNavigation);

// ***StackNavigator                --------------------------------------------------------------------------------
// import { createAppContainer } from "react-navigation";

// import { createStackNavigator } from "react-navigation-stack";

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// const mainNavigation = createStackNavigator({
//   Home,
//   Teste
// });

// export default createAppContainer(mainNavigation);

// ***DrawerNavigator                --------------------------------------------------------------------------------
// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createDrawerNavigator } from "react-navigation-drawer";
// import Icon from "react-native-vector-icons/FontAwesome";

// Icon.loadFont();

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// const mainNavigation = createDrawerNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: () => ({
//       drawerIcon: <Icon name="lock" size={20} color="#Da552f" />
//     })
//   },
//   Teste: {
//     screen: Teste,
//     navigationOptions: () => ({
//       drawerIcon: <Icon name="rocket" size={20} color="#Da552f" />
//     })
//   }
// });

// export default createAppContainer(mainNavigation);

// ***BottomTabNavigator                --------------------------------------------------------------------------------
// import { createAppContainer } from "react-navigation";

// import { createBottomTabNavigator } from "react-navigation-tabs";

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// const mainNavigation = createBottomTabNavigator({
//   Home,
//   Teste
// });

// export default createAppContainer(mainNavigation);

// ***MaterialBottomTabNavigator                --------------------------------------------------------------------------------
// import React from "react";
// import { createAppContainer } from "react-navigation";
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import Icon from "react-native-vector-icons/FontAwesome";

// import Home from "./pages/Home";
// import Teste from "./pages/Teste";

// Icon.loadFont();

// const mainNavigation = createMaterialBottomTabNavigator(
//   {
//     Home: {
//       screen: Home,
//       navigationOptions: () => ({
//         tabBarIcon: ({ focused }) => (
//           <Icon name="lock" size={20} color={focused ? "#fff" : "#ddd"} />
//         )
//       })
//     },
//     Teste: {
//       screen: Teste,
//       navigationOptions: () => ({
//         tabBarIcon: ({ focused }) => (
//           <Icon name="rocket" size={20} color={focused ? "#fff" : "#ddd"} />
//         )
//       })
//     }
//   },
//   {
//     barStyle: {
//       backgroundColor: "#Da552f"
//     }
//   }
// );

// export default createAppContainer(mainNavigation);

// ***MaterialTopTabNavigator                --------------------------------------------------------------------------------
import React from "react";
import { SafeAreaView } from "react-native";

import { createAppContainer } from "react-navigation";

import {
  createMaterialTopTabNavigator,
  MaterialTopTabBar
} from "react-navigation-tabs";

import Home from "./pages/Home";
import Teste from "./pages/Teste";

function SafeAreaMaterialTopTabBar(props) {
  return (
    <SafeAreaView>
      <MaterialTopTabBar {...props} />
    </SafeAreaView>
  );
}

const mainNavigation = createMaterialTopTabNavigator(
  {
    Home,
    Teste
  },
  {
    tabBarComponent: SafeAreaMaterialTopTabBar,
    tabBarOptions: {
      tabStyle: {
        backgroundColor: "#Da552f"
      }
    }
  }
);

export default createAppContainer(mainNavigation);

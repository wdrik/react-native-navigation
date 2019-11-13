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
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import Icon from "react-native-vector-icons/FontAwesome";

Icon.loadFont();

import Home from "./pages/Home";
import Teste from "./pages/Teste";

const mainNavigation = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      drawerIcon: <Icon name="lock" size={20} color="#7159c1" />
    })
  },
  Teste: {
    screen: Teste,
    navigationOptions: () => ({
      drawerIcon: <Icon name="rocket" size={20} color="#7159c1" />
    })
  }
});

export default createAppContainer(mainNavigation);

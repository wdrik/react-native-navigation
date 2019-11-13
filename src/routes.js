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

import React from "react";
import { createAppContainer } from "react-navigation";
import createAnimatedSwitchNavigator from "react-navigation-animated-switch";
import { Transition } from "react-native-reanimated";

import Home from "./pages/Home";
import Teste from "./pages/Teste";

const mainNavigation = createAnimatedSwitchNavigator(
  {
    Home,
    Teste
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    )
  }
);

export default createAppContainer(mainNavigation);

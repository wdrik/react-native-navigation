import { createSwitchNavigator, createAppContainer } from "react-navigation";

import Home from "./pages/Home";
import Teste from "./pages/Teste";

const mainNavigation = createSwitchNavigator(
  {
    Home,
    Teste
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(mainNavigation);

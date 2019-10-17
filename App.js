import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Authentication from "./src/components/Authentication";
import Home from "./src/components/Home";
import Loading from "./src/components/Loading";

const switchNavigator = createSwitchNavigator({
  Loading,
  Authentication,
  Home
});

export default createAppContainer(switchNavigator);

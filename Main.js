import { registerRootComponent } from "expo";
import App from "./src/App";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";


const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

registerRootComponent(Main);

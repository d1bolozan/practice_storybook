import { Provider } from "react-redux";
import InboxScreen from "./components/InboxScreen";
import store from "./store";

const App = () => (
	<Provider store={store}>
		<InboxScreen />
	</Provider>
);

export default App;

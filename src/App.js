import "./styles.css";
import User from "./User";
import { Provider } from "./UserContext";
export default function App() {
  return (
    <>
      <Provider value={{ name: "bhagwan" }}>
        <User />
      </Provider>
    </>
  );
}

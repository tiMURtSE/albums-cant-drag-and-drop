import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme/theme";
import CSSReset from "styles/global/CSSReset.styled";
import GlobalStyle from "styles/global/GlobalStyle.styled";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<>
		{/* <React.StrictMode> */}
		<CSSReset />
		<GlobalStyle />
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Provider>
		{/* </React.StrictMode> */}
	</>
);

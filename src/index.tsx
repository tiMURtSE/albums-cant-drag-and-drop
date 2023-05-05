import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme/theme";
import CSSReset from "styles/global/CSSReset.styled";
import GlobalStyle from "styles/global/GlobalStyle.styled";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "store";

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
		{/* </React.StrictMode> */},
	</>
);

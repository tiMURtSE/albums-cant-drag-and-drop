import ReactDOM from "react-dom/client";
import App from "./App";
import store from "store";
import { Provider } from "react-redux";
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
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
		{/* </React.StrictMode> */},
	</>
);

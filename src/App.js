import React from "react"
import { HashRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { RecoilRoot } from "recoil"
import { colors, routePathList } from "./config"

import Home from "src/views/Home"
import Admin from "src/views/Admin"

const GlobalStyle = createGlobalStyle`
	:root {
		--primary: ${props => props.theme.primary};
		--primary-light: ${props => props.theme.primaryLight};
		--secondary: ${props => props.theme.secondary};
		--gray: ${props => props.theme.gray};
	}

	body {
		padding: 0;
		margin: 0;
		border: 0;
		outline: 0;
		// background: #f0f0ff;
	}

	* {
		box-sizing: border-box;
		font-family: "Ubuntu", sans-serif;
	}
`

const App = () => {
	return (
		<RecoilRoot>
		<ThemeProvider theme={colors}>
		<HashRouter>
			<GlobalStyle />
			<Routes>
				<Route path={routePathList.home}
					element={<Home />} exact />

				<Route path={routePathList.admin}
					element={<Admin />} />
			</Routes>
		</HashRouter>
		</ThemeProvider>
		</RecoilRoot>
	)
}

export default App

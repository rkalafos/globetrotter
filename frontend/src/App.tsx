import * as React from "react"
import {
  ChakraProvider, extendTheme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Create } from "./pages/Create"
import NotFound from "./pages/NotFound"
import { Join } from "./pages/Join";
import { Race } from "./pages/Race"
import { Provider } from "react-redux";
import { store } from "./services/store";
import { FindRace } from "./pages/FindRace";
import { RaceProvider } from "./services/RaceProvider";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        overflow: "hidden",
        webkitOverflowScrolling: "touch",
      }
    }
  }
})

export const App = () => (
  <RaceProvider>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route path="join" element={<Join />} />
            <Route path="find" element={<FindRace />} />
            <Route path="race/:id" element={<Race />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </RaceProvider>
)

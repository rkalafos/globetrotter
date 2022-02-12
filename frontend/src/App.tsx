import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Create } from "./pages/Create"
import NotFound from "./pages/NotFound"
import { Join } from "./pages/Join";
import { Race } from "./pages/Race"
import { Provider } from "react-redux";
import { store } from "./services/store";

export const App = () => (
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create" element={<Create />} />
          <Route path="join" element={<Join />} />
          <Route path="race/:id" element={<Race />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
)

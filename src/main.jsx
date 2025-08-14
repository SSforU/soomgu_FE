import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MyPlacePage from "./pages/MyPlacePage";
import CharacterPage from "./pages/CharacterPage";
import PageSelection_gu from "./pages/PlaceSelection_gu";
import GuDetailPage from "./pages/GuDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "place-selection-gu", element: <PageSelection_gu /> },
      { path: "my-place", element: <MyPlacePage /> },
      { path: "character", element: <CharacterPage /> },
      { path: "gu-detail/:guName", element: <GuDetailPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
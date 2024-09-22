import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import About from "./Components/About.jsx";
import Main from "./Components/Main.jsx";
import AddBook from "./Components/AddBook.jsx";
import BookDetails from "./Components/BookDetails.jsx";
import store from "./Components/store";
import ErrorComponent from "./Components/ErrorComponent.jsx";
import Contact from "./Components/Contact.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "books",
        element: <Main />,
      },
      {
        path: "books/category/:bookCategory",
        element: <Main />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
      },
      {
        path: "add-book",
        element: <AddBook />,
      },
      {
        path: "",
        element: <Main />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

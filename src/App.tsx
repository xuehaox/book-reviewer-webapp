import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookPage from "./pages/BookPage";
import AuthPageLayout from "./pages/AuthPageLayout";
import SigninForm from "./pages/SigninForm";
import SignupForm from "./pages/SignupForm";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />

      <Route path="about" element={<AboutPage />} />

      <Route path="auth" element={<AuthPageLayout />}>
        <Route path="signin" element={<SigninForm />} />
        <Route path="signup" element={<SignupForm />} />
      </Route>

      <Route path="book/:id" element={<BookPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import { Route, Routes } from "react-router-dom";
import Browse from "./components/Browse";
import MovieDetails from "./components/movie/MovieDetails";
import Header from "./components/Header";
import PrivateRoute from "./components/auth/PrivateRoute";
import GPTSearch from "./components/GPT/GptSearch";

function App() {
  return (
    <>
      <PrivateRoute>
        <Header />
        <Routes>
          <Route path="/login" element={<PrivateRoute />} />
          <Route path="/" element={<Browse />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/movie" element={<MovieDetails />} />
          <Route path="/gpt-search" element={<GPTSearch />} />
        </Routes>
      </PrivateRoute>
    </>
  );
}

export default App;

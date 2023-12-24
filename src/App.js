import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostDetail from "./components/PostDetail";
import { AuthProvider } from "./contexts/AuthContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <AuthProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:postId" element={<PostDetail />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
          <Footer />
        </AuthProvider>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";

import Home from "./pages/Home";
import CreateHackathon from "./pages/CreateHackathon";

import Layout from "./components/Layout";
import HackathonDetails from "./pages/HacakthonDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ReactLenis root>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hackathon/create" element={<CreateHackathon />} />
              <Route path="/hackathon/:id" element={<HackathonDetails />} />
            </Routes>
          </Layout>
        </ReactLenis>
      </Router>
    </QueryClientProvider>
  );
}

export default App;

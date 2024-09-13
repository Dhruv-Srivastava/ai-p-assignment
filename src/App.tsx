import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import Home from "./pages/Home";
import CreateHackathon from "./pages/CreateHackathon";

import Layout from "./components/Layout";
import HackathonDetails from "./pages/HacakthonDetails";
import HackathonProvider from "./context/MockDataProvider";
import EditHackathon from "./pages/EditHackathon";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.alert(
      "All of the data is stored in state. Any refresh will cause the data to be lost. Database could and should be used to deal with async state."
    );
  }, []);
  return (
    <HackathonProvider>
      <Router>
        <ReactLenis root>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hackathon/create" element={<CreateHackathon />} />
              <Route path="/hackathon/:id" element={<HackathonDetails />} />
              <Route path="/hackathon/:id/edit" element={<EditHackathon />} />
            </Routes>
          </Layout>
        </ReactLenis>
      </Router>
      <Toaster />
    </HackathonProvider>
  );
}

export default App;

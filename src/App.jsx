import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import { AuthProvider } from "./contexts/AuthContext";
import AppRoutes from "./routes/Approutes";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Header />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;

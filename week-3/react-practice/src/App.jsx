import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
    <>

    <>
   <header>
      <Header />
   </header>

   <main>
      <Hero />
      <About />
      <Services />
   </main>

   <footer>
      <Footer />
   </footer>
</>
      
    </>
  );
}

export default App;
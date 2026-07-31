import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";


function App() {
  return (
    <>

    <>
   <Header
        logo="DevGate"
        nav1="Home"
        nav2="About"
        nav3="Topics"
      />

   <main>
       <Hero
        title="MERN Stack Internship Journey"
        subtitle="Learning React one component at a time."
        buttonText="Explore Learning"
      />
      <About
        heading="About This Journey"
        description="This project showcases my MERN Stack internship progress using React."
      />
      <Services
        title="Topics Covered"
        service1="React Components"
        service2="JSX"
        service3="Props"
      />
   </main>

   <footer>
      <Footer
        author="Areeba Qamar"
        year={2026}
      />
   </footer>
</>
      
    </>
  );
}

export default App;
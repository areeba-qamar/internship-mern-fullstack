import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import CurrentFocus from "./components/CurrentFocus";
import SectionContainer from "./components/SectionContainer";


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
        service1="Props"
        service2="Receiving Props"
        service3="Accessing props"
        service4="Props as an object"
      />

      <CurrentFocus
      week="Week 3"
      technology="React"
      lesson="Props Destructuring"
      goal="Build reusable components"
      />

       <SectionContainer>
       <h2>Current Focus</h2>
       <p>Learning React Props & Children</p>
       </SectionContainer>

       <SectionContainer>
       <h2>My Services</h2>
       <p>Frontend Development</p>
       </SectionContainer>
      
      
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
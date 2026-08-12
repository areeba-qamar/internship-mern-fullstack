import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import CurrentFocus from "./components/CurrentFocus";
import SectionContainer from "./components/SectionContainer";
import LearningCard from "./components/LearningCards";
import Section from "./components/Section";
import Counter from "./components/Counter";
import NameInput from "./components/NameInput";
import Toggle from "./components/Toggle";
import StudentProfile from "./components/StudentProfile";
import TaskList from "./components/TaskList";


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

      <section className="learning-section">

        <h1>My Learning</h1>

       <LearningCard
        week={`Week ${1}`}
        topic="HTML & CSS"
        status="Completed"
        />

        <LearningCard
        week={`Week ${2}`}
        topic="Java Script"
        status="Completed"
        />

        <LearningCard
        week={`Week ${3}`}
        topic="React"
        status="In-progress"
        />

      </section>
       
      
      <Section
        title="Current Focus"
       description="I am currently learning React and building reusable components."
      >
        <h3>What I'm Practicing</h3>
        <ul>
        <li>Props</li>
        <li>Props Destructuring</li>
        <li>Children Prop</li>
        </ul>
     </Section>

     <Section title="Remaining Topics" description="Backend is next">
     <p>Node.js and Express.js</p>
     </Section>

      <Counter />

      <NameInput 
       entername = "Enter your Name below : "
       enteremail= "Enter your e-mail below : "
       />

       <Toggle/>

       <StudentProfile/>

       <TaskList/>
      
      
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
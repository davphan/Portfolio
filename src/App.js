import './App.css';
import { styled, ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import { purpleTheme } from './utils/Themes';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import { BrowserRouter } from 'react-router-dom';

const Body = styled.div`
  background-color: ${({ theme }) => theme.secondary_light};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overscroll-behavior: none;
`;

const GradientBackground = styled.div`
  background: linear-gradient(38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 289, 0) 50%,
      rgba(0, 70, 289, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  return (
    <ThemeProvider theme={purpleTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          <About/>
          <GradientBackground>
            <Skills/>
            <Experience/>
          </GradientBackground>
          <Projects/>
          <Education/>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

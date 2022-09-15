import './App.css';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import styled from 'styled-components'

const AppWrapper = styled.div`
width: 100%;
background: #F5F5F5;
min-height: 100vh;
margin: 0;
font-family: 'Inter';
font-style: normal;
`

function App() {
  return (
    <AppWrapper>
      <Header />
      <ContactForm />
    </AppWrapper>
  );
}

export default App;

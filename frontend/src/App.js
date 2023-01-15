import './App.css';
import { Main } from './pages/main';
import { PromptProvider } from './promptContext';

function App() {
  return (
    <div className="App">
      <PromptProvider>
        <Main />
      </PromptProvider>
    </div>
  );
}

export default App;

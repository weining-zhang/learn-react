import DomRefInput from './refs/DomRefInput';
import ClassRefInput from './refs/ClassRefInput';
import FunctionRefInput from './refs/FunctionRefInput';
import ForwardRefButton from './refs/ForwardRefButton';

function App() {
  return (
    <div className="App">
      <DomRefInput/>
      <ClassRefInput/>
      <FunctionRefInput/>
      <ForwardRefButton/>
    </div>
  );
}

export default App;

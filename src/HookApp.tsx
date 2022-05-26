import CounterApp from './components/01-useState/CounterApp';
// eslint-disable-next-line max-len
import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
import FormWithCustomHook from './components/02-useState/FormWithCustomHook';
import SimpleForm from './components/02-useState/SimpleForm';
import MultipleCustomHook from './components/03-examples/MultipleCustomHook';
import FocusScreen from './components/04-useRef/FocusScreen';
import RealExampleRef from './components/04-useRef/RealExampleRef';
import Layout from './components/05-useLayoutEffect/Layout';
import MemoHook from './components/06-memos/MemoHook';
import Memorize from './components/06-memos/Memorize';
import UseCallBackHook from './components/06-memos/UseCallBackHook';
import Parent from './components/07-tarea-memo/Parent';
import TodoApp from './components/08-useReducer/TodoApp';

const HookApp = () => (
  <div className="container-xl">
    <h1 className="text-center">HookApp</h1>
    <hr />

    <div className="row d-grid gap-5">
      <TodoApp />
      <Parent />
      <UseCallBackHook />
      <MemoHook />
      <Memorize />
      <Layout />
      <RealExampleRef />
      <FocusScreen />
      <MultipleCustomHook />
      <FormWithCustomHook />
      <SimpleForm />
      <CounterWithCustomHook />
      <CounterApp />
    </div>
  </div>
);

export default HookApp;

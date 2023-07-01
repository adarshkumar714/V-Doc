import './App.css';

import { Home } from './components/home/Home';
import { Chat } from './components/chat/Chat';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/">
        <Route index element={ <Chat /> } />
      </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
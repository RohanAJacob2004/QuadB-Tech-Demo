import Login from './pages/Login'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App

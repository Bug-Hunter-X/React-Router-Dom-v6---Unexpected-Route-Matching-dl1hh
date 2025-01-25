```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* added a catch all route that checks the pathname. If the path name is not matched with any of the above routes, it will render NotFound component */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function NotFound() {  const location = useLocation();
  return (
    <h1>Not Found</h1>
    <p>pathname: {location.pathname}</p>
  );
}
export default App; 
```
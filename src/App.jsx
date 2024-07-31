import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Welcome = lazy(() => import('./components/Welcome'));
const CharacterList = lazy(() => import('./components/CharacterList'));
const CharacterInfo = lazy(() => import('./components/CharacterInfo'));
const AddCharacter = lazy(() => import('./components/AddCharacter'));
const PageNotFound = lazy(() => import('./components/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/add" element={<AddCharacter />} />
        <Route path="/characters/id/:id" element={<CharacterInfo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;

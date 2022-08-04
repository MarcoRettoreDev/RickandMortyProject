import { Routes ,Route } from 'react-router-dom';
import { WelcomePage } from '../Containers/WelcomePage';
import { Section } from '../Containers/Section';
import { Characters } from '../Containers/Characters';
import { Episodes } from '../Containers/Episodes';
import { Locations } from '../Containers/Locations';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />

        <Route element={<Section />} >
          <Route path="characters" element={<Characters />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="locations" element={<Locations />} />
        </Route>
      </Routes>
    </>
  );
}
import { Routes ,Route } from 'react-router-dom';
import { WelcomePage } from '../Containers/WelcomePage';
import { Layout } from '../Containers/Layout';
import { Characters } from '../Containers/Characters';
import { Episodes } from '../Containers/Episodes';
import { Locations } from '../Containers/Locations';
import { SingleEpisode } from '../Containers/SingleEpisode';
import { SingleLocation } from '../Containers/SingleLocation';
import { ErrorComponent } from '../Components/ErrorComponent';

export const Router = () => {

  return (
    <>
      <Routes>
        <Route default path={process.env.PUBLIC_URL} element={<WelcomePage />} />

        <Route element={<Layout />} >
          <Route path={`${process.env.PUBLIC_URL}characters`} element={<Characters />} />
          <Route path={`${process.env.PUBLIC_URL}episodes`} element={<Episodes />} />
          <Route path={`${process.env.PUBLIC_URL}episodes/:episodeID`} element={<SingleEpisode/>}/>
          <Route path={`${process.env.PUBLIC_URL}locations`} element={<Locations />} />
          <Route path={`${process.env.PUBLIC_URL}location/:locationID`} element={<SingleLocation />}/>
          <Route path={`*`} element={<ErrorComponent/>}/>
        </Route>
      </Routes>
    </>
  );
}
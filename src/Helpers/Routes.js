import { Routes, Route } from "react-router-dom";
import { WelcomePage } from "../Containers/WelcomePage";
import { Layout } from "../Containers/Layout";
import { Characters } from "../Containers/Characters";
import { Episodes } from "../Containers/Episodes";
import { Locations } from "../Containers/Locations";
import { SingleEpisode } from "../Containers/SingleEpisode";
import { SingleLocation } from "../Containers/SingleLocation";
import { ErrorComponent } from "../Components/ErrorComponent";
import { ROUTES } from "./routesIndex";
export const Router = () => {
  return (
    <Routes>
      <Route exact path={ROUTES.home} element={<WelcomePage />} />

      <Route element={<Layout />}>
        <Route path={ROUTES.characters} element={<Characters />} />
        <Route path={ROUTES.episodes} element={<Episodes />} />
        <Route path={ROUTES.episode} element={<SingleEpisode />} />
        <Route path={ROUTES.locations} element={<Locations />} />
        <Route path={ROUTES.location} element={<SingleLocation />} />
        <Route path={`*`} element={<ErrorComponent />} />
      </Route>
    </Routes>
  );
};

import { WelcomePageCard } from "../Components/WelcomePageCard";
import { ROUTES } from "../Helpers/routesIndex";

const WelcomePage = () => {
  let welcomePageData = [
    {
      id: 1,
      link: ROUTES.locations,
      text: "Locations",
    },
    {
      id: 2,
      link: ROUTES.episodes,
      text: "Episodes",
    },
    {
      id: 3,
      link: ROUTES.characters,
      text: "Characters",
    },
  ];

  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="d-flex flex-column justify-content-around align-items-center">
          {welcomePageData.map((card) => {
            return (
              <WelcomePageCard
                key={card.id}
                imgSrc={card.imgSrc}
                text={card.text}
                link={card.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { WelcomePage };

import { WelcomePageCard } from "../Components/WelcomePageCard";

const WelcomePage = () => {
  
  let welcomePageData = [
    {
      id: 1,
      link: "/locations",
      text: "Locations"
    },
    {
      id: 2,
      link: "/episodes",
      text: "Episodes"
    },
    {
      id: 3,
      link: "/characters",
      text: "Characters"
    }
  ];
  
  return (
    <div className="container">
      <div className="row min-vh-100">
        <div className="d-flex flex-column justify-content-around align-items-center">
          {
          welcomePageData.map((card) => {
            return (
              <WelcomePageCard
              key={card.id}
              imgSrc={card.imgSrc}
              text={card.text}
              link={card.link}
              />
              );
            })
          }
        </div>
      </div>
    </div>
  )
}

export { WelcomePage };
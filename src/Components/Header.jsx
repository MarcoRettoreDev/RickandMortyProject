import { useState, useContext, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from "../Helpers/ActionTypes";
import { Icon } from "@iconify/react";

import logo from "../assets/icons/Logo_660x600.png";
import { SearchBar } from "../Components/SearchBar";
import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "../Helpers/routesIndex";

const Header = () => {
  const { dispatch } = useContext(myContext);
  const [open, setOpen] = useState(false);
  const [isReadyForInstall, setIsReadyForInstall] = useState(false);

  const resetState = () => {
    dispatch({ type: ActionTypes.SET_SEARCH_INPUT, payload: "" });
    dispatch({ type: ActionTypes.SET_PAGE, payload: 1 });
  };

  const variants = {
    open: {
      opacity: 1,
      x: 0,
    },
    closed: {
      opacity: 0,
      x: "-20vh",
    },
  };

  const divRef = useRef(null);

  useEffect(() => {
    const computed = window
      .getComputedStyle(divRef.current)
      .getPropertyValue("display");

    if (computed === "none") {
      setOpen(true);
    }

    // Evento que escucha cuando podemos instalar la app
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to={ROUTES.home}>
          <img src={logo} alt="Logo rick and morty" className="navbarLogo" />
        </Link>
        <button
          ref={divRef}
          onClick={() => setOpen(!open)}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <motion.div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
          animate={open ? "open" : "closed"}
          variants={variants}
        >
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className={"nav-link"}
                to={ROUTES.home}
                aria-current="page"
                onClick={resetState}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={ROUTES.characters}
                className={({ isActive }) =>
                  isActive ? "nav-link linkActive" : "nav-link"
                }
                aria-current="page"
                onClick={resetState}
              >
                Characters
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={ROUTES.episodes}
                className={({ isActive }) =>
                  isActive ? "nav-link linkActive" : "nav-link"
                }
                aria-current="page"
                onClick={resetState}
              >
                Episodes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={ROUTES.locations}
                className={({ isActive }) =>
                  isActive ? "nav-link linkActive" : "nav-link"
                }
                aria-current="page"
                onClick={resetState}
              >
                Locations
              </NavLink>
            </li>
          </ul>
          <div className="d-flex ms-auto" role="search">
            <SearchBar />
          </div>
          {isReadyForInstall && (
            <div>
              <Link
                to={`/`}
                className="nav-link ms-5"
                aria-current="page"
                onClick={() => downloadApp()}
              >
                <Icon icon="material-symbols:download" width="32" height="32" />
                Download
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </nav>
  );
};

export { Header };

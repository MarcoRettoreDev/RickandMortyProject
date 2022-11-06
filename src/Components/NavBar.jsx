import { useContext } from "react";

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from "../Helpers/ActionTypes";
import { useEffect } from "react";
import { Icon } from "@iconify/react";

function NavBar() {
  const { state, dispatch } = useContext(myContext);

  const changePage = (page) => {
    dispatch({ type: ActionTypes.SET_PAGE, payload: page });
  };

  const pages = [];

  const renderJumpPage = () => {
    for (let i = 1; i <= state.totalPages; i++) {
      pages.push(
        <li onClick={() => changePage(i)} key={i}>
          {i}
        </li>
      );
    }
  };

  useEffect(() => {
    renderJumpPage();
  }, [state.totalPages]);

  return (
    <div className="navbarContainer">
      <div className="container">
        <nav className="d-flex">
          <div className="navbarButtonWrapper">
            {state.page !== 1 ? (
              <Icon
                className="button_prev"
                onClick={() => changePage(state.page - 1)}
                icon="jam:arrow-square-left"
                width="32"
                height="32"
              />
            ) : (
              <Icon
                style={{ opacity: 0 }}
                onClick={() => {
                  if (state.page !== 1) changePage(state.page - 1);
                }}
                icon="jam:arrow-square-left"
                width="32"
                height="32"
              />
            )}
            <div className="navbarPageWrapper">
              <span className="pageNumber">{state.page}</span>
            </div>
            {state.page < state.totalPages ? (
              <Icon
                onClick={() => changePage(state.page + 1)}
                className="button_next"
                icon="jam:arrow-square-right"
                width="32"
                height="32"
              />
            ) : (
              <Icon
                onClick={() => {
                  if (state.page < state.totalPages) changePage(state.page + 1);
                }}
                style={{ opacity: 0 }}
                className="button_next"
                icon="jam:arrow-square-right"
                width="32"
                height="32"
              />
            )}
          </div>
        </nav>
      </div>
      <footer className="footer__wrapper">
        <p>
          {" "}
          Made with ♥ by{" "}
          <a
            href="https://marcorettoredev.github.io/"
            rel="noreferer"
            target="_blank"
          >
            Mr.Dev
          </a>
        </p>
      </footer>
    </div>
  );
}

export { NavBar };

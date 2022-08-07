import { useContext } from "react";
import arrowLeft from "../assets/svg/arrow-left-r.svg";
import arrowRight from "../assets/svg/arrow-right-r.svg";

import { myContext } from "../Helpers/UseContext";
import { ActionTypes } from "../Helpers/ActionTypes";
import { useEffect } from "react";

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
  
  console.log(state)

  useEffect(() => {
    renderJumpPage();
  }, [state.totalPages]);

  return (
    <div className="navbarContainer">
      <div className="container">
        <nav className="d-flex flex-row justify-content-center align-items-center">
          <div className="navbarButtonWrapper">
            {state.page !== 1 ? (
              <img
                className="button_prev"
                onClick={() => changePage(state.page - 1)}
                src={arrowLeft}
              ></img>
            ) : (
              <img
                style={{ opacity: 0 }}
                onClick={() => {
                  if (state.page != 1) changePage(state.page - 1);
                }}
                src={arrowLeft}
              ></img>
            )}
            <div className="navbarPageWrapper">
              <span>{state.page}</span>
            </div>
            {state.page < state.totalPages ? (
              <img
                className="button_next"
                onClick={() => changePage(state.page + 1)}
                src={arrowRight}
              ></img>
            ) : (
              <img
                style={{ opacity: 0 }}
                onClick={() => {
                  if (state.page < state.totalPages) changePage(state.page + 1);
                }}
                src={arrowRight}
              ></img>
            )}
          </div>
          <div className="navbarSelectWrapper">
            <div className="dropup">
              <button className="dropbtn">Select</button>
              <div className="dropup-content">
                {/* <a href="#" onClick={() =>changePage(10)}>Page 10</a>
                <a href="#" onClick={() =>changePage(20)}>Page 20</a>
                <a href="#" onClick={() =>changePage(30)}>Page 30</a>
                <a href="#" onClick={() =>changePage(40)}>Page 40</a> */}
                {pages}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export { NavBar };

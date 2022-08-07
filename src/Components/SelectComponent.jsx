import { myContext } from "../Helpers/UseContext"
import { useContext } from "react";
import { ActionTypes } from "../Helpers/ActionTypes";

const SelectComponent = () => {
  const { state, dispatch } = useContext(myContext);

  const changeID = e => {
    dispatch({ type: ActionTypes.SET_PAGE, payload: Number(e.target.value) });
  }

  let total = state.totalEpisodes > 0 ? state.totalEpisodes : state.totalLocations;

  return (
    <div className="input-group mb-3">
        <select
        onChange={(e) => changeID(e)}
        className="form-select"
        >
          <option value="1">Choose...</option>
            {[...Array(total).keys()].map((x, index) => {
              return (
                <option value={x + 1}>
                  Episode N° {x + 1}
                </option>
              );
            })}
        </select>
    </div>
  )
}

export { SelectComponent }
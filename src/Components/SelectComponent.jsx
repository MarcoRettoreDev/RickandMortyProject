import { myContext } from "../Helpers/UseContext"
import { useContext } from "react";
import { ActionTypes } from "../Helpers/ActionTypes";

const SelectComponent = () => {
  const { state, dispatch } = useContext(myContext);

  const changePage = e => {
    dispatch({ type: ActionTypes.SET_PAGE, payload: Number(e.target.value) });
  }

  let total = state.totalPages > 0 ? state.totalPages : null;

  return (
    <div className="input-group mb-5">
        <select
        onChange={(e) => changePage(e)}
        className="form-select"
        >
          <option value="1">Jump to page</option>
            {[...Array(total).keys()].map((x, index) => {
              return (
                <option value={x + 1}>
                  Page N° {x + 1}
                </option>
              );
            })}
        </select>
    </div>
  )
}

export { SelectComponent }
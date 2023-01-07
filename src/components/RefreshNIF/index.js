import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export const RefreshNIF = ({ refreshNif }) => {
  return (
    <button type="button" onClick={refreshNif}>
      <FontAwesomeIcon icon={faArrowsRotate} />
    </button>
  );
};

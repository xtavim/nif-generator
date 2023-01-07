import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

export const Tooltip = ({ nif, copiedNif }) => {
  return (
    <div className={`copyToClipboard ${copiedNif && "copied"}`}>
      <FontAwesomeIcon icon={copiedNif === nif ? faCheck : faCopy} />
      <span>
        {copiedNif === nif ? "Copiado com sucesso!" : "Clique para Copiar"}
      </span>
    </div>
  );
};

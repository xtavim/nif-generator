import { useState } from "react";
import { RefreshNIF } from "../RefreshNIF";
import { AutoRefreshNIF } from "../AutoRefreshNIF";
import { Tooltip } from "../Tooltip";
import "./style.css";

export const NIF = () => {
  const generateNif = () => {
    const N1 = Math.ceil(Math.random() * 3);
    const N2 = randomNumber();
    const N3 = randomNumber();
    const N4 = randomNumber();
    const N5 = randomNumber();
    const N6 = randomNumber();
    const N7 = randomNumber();
    const N8 = randomNumber();

    const sum =
      N1 * 9 + N2 * 8 + N3 * 7 + N4 * 6 + N5 * 5 + N6 * 4 + N7 * 3 + N8 * 2;

    let finalN = sum % 11;

    if (finalN >= 1) {
      finalN = 0;
    }

    if (finalN >= 10) {
      finalN = 1;
    }

    return `${N1}${N2}${N3} ${N4}${N5}${N6} ${N7}${N8}${finalN}`;
  };

  const randomNumber = () => {
    return Math.round(Math.random() * 9);
  };

  const refreshNif = () => {
    setNif(generateNif());
    setCopiedNif(null);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nif.split(" ").join(""));

    setCopiedNif(nif);
  };

  const [nif, setNif] = useState(generateNif());
  const [copiedNif, setCopiedNif] = useState(null);

  return (
    <div>
      <AutoRefreshNIF refreshNif={refreshNif} />
      <div className="container">
        <div className="nif" onClick={copyToClipboard}>
          {nif}
          <Tooltip nif={nif} copiedNif={copiedNif} />
        </div>
        <RefreshNIF refreshNif={refreshNif}></RefreshNIF>
      </div>
    </div>
  );
};

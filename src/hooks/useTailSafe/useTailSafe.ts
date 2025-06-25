import { useContext } from "react";
import { TailSafeContext } from "../../provider";

export const useTailSafe = () => useContext(TailSafeContext);

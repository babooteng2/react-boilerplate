import { createContext } from "react";

const initiaLang = { lang: "ko" };
const LangContext = createContext(initiaLang);

export default LangContext;

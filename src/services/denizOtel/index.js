import { get } from "../main";
import { denizVeri1 } from "../NetworkUrl";

const denizOtelVeri1 = (queryString) => {
    const TodosUrl = denizVeri1 + queryString;
    return get(TodosUrl);
  };
  export default {denizOtelVeri1};
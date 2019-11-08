import data from "../assets/data";
import { xmlToJson, createObject } from "../util/interop";
import { createSearchArray } from "../util/data";

export const UPDATE_HIERARCHY = "UPDATE_HIERARCHY";
export const updateHierarchy = data => {
  return { type: UPDATE_HIERARCHY, data };
};

export const loadHierarchy = () => {
  return dispatch => {
    data
      .then((res, rej) => {
        const [mainXml, mainExamples, newExamples, errorMessages] = res;
        let dynLib = xmlToJson(mainXml);
        let hierarchy = createObject(dynLib);
        dispatch(
          updateHierarchy({
            hierarchy,
            searchArray: createSearchArray(hierarchy, mainExamples, newExamples, errorMessages)
          })
        );
      })
      .catch(console.error.bind(console));
  };
};

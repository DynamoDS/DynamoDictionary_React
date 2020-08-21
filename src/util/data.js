import { flatten, flattenHierarchy } from "./array";
// import errorSectionItems from '../../public/data/Dynamo_Error_Messages';

export const addOverload = node => {
  node.RouteName =
    node.Name +
    "(" +
    (node.Inputs
      ? node.Inputs.map(e => e.Name + "_" + e.Type).join("-")
      : "()") +
    ")";
  node.TempName =
    node.Name +
    " (" +
    (node.Inputs ? node.Inputs.map(e => e.Name).join(", ") : "()") +
    ")";
};

export const createSearchArray = (hierarchy, mainExamples, newExamples, errorSectionItems) => {
  let searchArray = flatten(hierarchy.map(d => flattenHierarchy(d)));
  searchArray.forEach((d, i) => {
    d.ogName = d.Name;
    d.inDepth = d.inDepth || `Add in-depth information about ${d.Name}...`;
    if (i > 0 && d.Name === searchArray[i - 1].Name) {
      addOverload(d);
      if (!searchArray[i - 1].TempName) {
        addOverload(searchArray[i - 1]);
      }
    }
  });
  searchArray.forEach((d, i) => {
    if (d.TempName) {
      d.Name = d.TempName;
    }
  });
  
  const combinedArray = [...mainExamples, ...newExamples];
  combinedArray.forEach(d => {
    searchArray.forEach(e => {
      if (e.Name === d.Name) {
        if (e.Categories.concat(e.Group).join("/") === d.folderPath) {
          e.imageFile = d.imageFile ? d.imageFile.slice() : [];
          e.dynFile = d.dynFile ? d.dynFile.slice() : [];

          e.inDepth = d.inDepth;
        }
      }
    });
  });

  // flattens the error message sections into a single array containing
  // items formatted for the search functionality
  const formatSearchItem = (section, message) => {
    return {
      Name: message.name,
      Description: message.description,
      inDepth: "",

      Categories: ["CommonErrorMessages"],
      Group: section,
      RouteName: message.id,
      
      SmallIcon: "",
      LargeIcon: ""
    }
  }

  const errorSearchItems = [].concat.apply([], errorSectionItems.map((section) => {
      return section.children.map((message) => formatSearchItem(section.id, message));
  }));

  return searchArray.concat(errorSearchItems);
};

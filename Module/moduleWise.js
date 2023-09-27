import {username as name, userEmail, showuserdetails, default as anonymous } from "./afterModule/export";
// as is used for renaming 
console.log(name)
showuserdetails();
anonymous();

import * as multipleExportSort from "./afterModule/multipleExport";
// We can also import all by using this sortcut
console.log(multipleExportSort.userId);
multipleExportSort.details();

import {ImImportingaOtherFunction} from "./afterModule/import.js"
ImImportingaOtherFunction();

// Aggregate Modules using
import {cirleArea, triArea, squareArea} from "./aggregateModules/shapesAggregate.js"
cirleArea();
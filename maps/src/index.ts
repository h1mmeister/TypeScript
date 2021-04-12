import { User } from "./User";
import { Comapny } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const company = new Comapny();
// console.log(user);
// console.log(company);
const customMap = new CustomMap("map");
customMap.addUserMarker(user);
customMap.addCompanyMarker(company);

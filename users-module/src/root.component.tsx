import Parcel from "single-spa-react/parcel";

import { ListTeams } from "@df/teams-module";

export default function Root(props) {
  return <ListTeams />;
}

// import Parcel from "single-spa-react/parcel";

// export default function Root(props) {
//   return <Parcel config={() => System.import("@df/teams-module/ListTeams")} />;
// }

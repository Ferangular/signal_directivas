import { Support } from "./support.model";
import { User } from "./user.mode";

export interface SingleUserReponse {
  data:    User;
  support: Support;
}

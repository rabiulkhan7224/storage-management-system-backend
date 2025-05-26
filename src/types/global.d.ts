import { Iuser } from "./user.types";

declare global {
  namespace Express {
    interface Request {
      user?: Iuser;
    }
  }
}
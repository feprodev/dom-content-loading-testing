import {Handler, Response} from "express";
import _ from "lodash";
import {Credentials} from "../models";
import {adminCredentials} from "../mocks";


export function auth(): Handler {
  return (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (authorizationHeader) {
      const base64Credentials = authorizationHeader.split(' ')[1];
      const rawCredentials = Buffer.from(base64Credentials, 'base64').toString();
      const [login, password] = rawCredentials.split(':');
      const credentials: Credentials = {
        login,
        password
      };

      if (_.isEqual(credentials, adminCredentials)) {
        next();
        return;
      }
    }

    askCredentials(res);
  };
}

function askCredentials(res: Response): void {
  res.setHeader("WWW-Authenticate", "Basic realm=\"User Visible Realm\"");
  res.status(401);
  res.end();
}

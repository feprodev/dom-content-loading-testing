import {Handler, Response} from "express";
import _ from "lodash";
import {adminCredentials} from "../mocks";
import {askCredentials, makeCredentials} from "../utils/credentials";
import {Credentials} from "../models";


export function auth(): Handler {
  return (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (authorizationHeader) {
      const credentials: Credentials = makeCredentials(authorizationHeader);

      if (_.isEqual(credentials, adminCredentials)) {
        next();
        return;
      }
    }

    askCredentials(res);
  };
}

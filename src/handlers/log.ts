import {Handler} from "express";

export function log(): Handler {
  return (req, res, next) => {
    const {query} = req;

    if (query.log) {
      console.log(query.log);
    }

    next();
  }
}

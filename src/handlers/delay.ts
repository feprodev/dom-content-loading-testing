import {Handler} from "express";

export function delay(): Handler {
  return (req, res, next) => {
    const {query} = req;

    if (query.delay) {
      makeDelay(Number(query.delay)).then(() => next());
    } else {
      next();
    }
  }
}

function makeDelay(ms: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), ms);
  })
}

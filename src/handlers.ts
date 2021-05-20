import {Handler} from "express";


export function optionalHandlers(): Handler {
  return (req, res, next) => {
    const { query } = req;
    const handlers: Array<any> = [];

    if (query.log) {
      handlers.push(log(query.log as string));
    }

    if (query.delay) {
      handlers.push(delay(Number(query.delay)));
    }

    Promise.all(handlers).then(() => next());
  }
}

function delay(ms: number): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(1), ms);
  })
}

async function log(message: string): Promise<void> {
  console.log(message);
}

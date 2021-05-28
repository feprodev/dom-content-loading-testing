import {Credentials} from "../models";
import {Response} from "express";

export function makeCredentials(authorizationHeader: string): Credentials {
  const base64Credentials = authorizationHeader.split(' ')[1];
  const rawCredentials = decodeBase64(base64Credentials);
  const [login, password] = rawCredentials.split(':');

  return {
    login,
    password
  };
}

function decodeBase64(raw: string): string {
  try {
    return Buffer.from(raw, 'base64').toString();
  } catch {
    return '';
  }
}

export function askCredentials(res: Response): void {
  res.setHeader("WWW-Authenticate", "Basic realm=\"User Visible Realm\"");
  res.status(401);
  res.end();
}

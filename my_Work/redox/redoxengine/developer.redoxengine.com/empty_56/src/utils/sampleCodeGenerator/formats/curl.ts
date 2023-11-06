/**
 * Module for generating cURL requests from SampleHTTPRequest objects.
 */
import { SampleHTTPRequest, SampleCodeContentType } from "..";
import { getContentType } from "../util";

/**
 * Accepts a SampleHTTPRequest and returns a string containing a multiline Bash command.
 */
export const requestToCurl = (req: SampleHTTPRequest): string => {
  const contentType = getContentType(req);

  return [
    `curl${urlToCurl(req.url)}`,
    methodToCurl(req.method),
    ...headersToCurl(req.headers),
    ...bodyToCurl(req.body, contentType),
  ].join(" \\\n");
};

const urlToCurl = (url?: string): string => (url ? ` '${url}'` : "");

const methodToCurl = (method?: string): string =>
  `--request ${method || "GET"}`;

const headerToCurl = ([k, v]: [string, string]): string =>
  `--header '${k}: ${v}'`;

const headersToCurl = (headers?: Record<string, string>): string[] =>
  Object.entries(headers ?? {}).map(headerToCurl);

const bodyToCurl = (
  body: string | undefined,
  contentType: SampleCodeContentType
): string[] => {
  if (contentType === "application/x-www-form-urlencoded")
    return urlencodedBodyToCurl(body);
  if (contentType === "application/json") return jsonBodyToCurl(body);
  if (contentType === "application/fhir+json") return jsonBodyToCurl(body);
  return [];
};

const urlencodedBodyToCurl = (body?: string): string[] =>
  body
    ? Object.entries(JSON.parse(body)).flatMap(([k, v]) =>
        Array.isArray(v)
          ? v.map((v) => `--data-urlencode '${k}=${v}'`)
          : `--data-urlencode '${k}=${v}'`
      )
    : [];

const jsonBodyToCurl = (body?: string): string[] =>
  body ? [`--data '${JSON.stringify(JSON.parse(body), null, 2)}'`] : [];

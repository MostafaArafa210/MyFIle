/**
 * Module for generating fetch requests from SampleHTTPRequest objects.
 */
import { SampleHTTPRequest } from "..";
import { getContentType } from "../util";

import * as querystring from "querystring";

/**
 * Accepts a SampleHTTPRequest and returns a string containing a JS code block.
 */
export function requestToFetch(req: SampleHTTPRequest): string {
  const contentType = getContentType(req);

  const body =
    contentType === "application/x-www-form-urlencoded"
      ? // body is a JSON-encoded querystring
        querystring.stringify(JSON.parse(req.body ?? "{}"))
      : // body is unknown or JSON-encoded (which is added later)
        undefined;

  const fetchConfig: RequestInit = {
    method: req.method ?? "GET",
    ...(req.headers ? { headers: req.headers } : undefined),
    ...(body ? { body } : undefined),
  };

  let fetchConfigJSON = JSON.stringify(fetchConfig, null, 2);

  // Add JSON-encoded bodies after JSON.stringify() so we can use backtick quotes and make it look good.
  if (
    req.body &&
    (contentType === "application/fhir+json" ||
      contentType === "application/json")
  ) {
    // Normalize JSON to pretty-printed format with newlines and 2-space indents.
    let stringBody = JSON.stringify(JSON.parse(req.body), null, 2);

    // add extra 2 spaces to the beginning of each line
    stringBody = stringBody.replace(/\n/g, "\n  ");

    // embed the body into the stringified JSON as the last property.
    // N.B. this will generate invalid JSON if the fetchConfig was an
    // empty object, but that shouldn't be the case since we should always
    // at least have content type headers.
    fetchConfigJSON = fetchConfigJSON.replace(
      /\n}$/,
      `,\n  "body": \`${stringBody}\`\n}`
    );
  }

  return `const response = await fetch("${
    req.url ?? ""
  }", ${fetchConfigJSON});`;
}

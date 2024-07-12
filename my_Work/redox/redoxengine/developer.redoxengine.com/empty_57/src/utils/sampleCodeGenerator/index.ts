/**
 * Module for HTTP request code generation (Fetch and cURL).
 *
 * The main entrypoint is sampleCodeForRequest().
 *
 * If generating based on an OpenAPI thing, try generateCodeExamplesForOperation() in ./openApi.ts
 */
import { requestToCurl } from "./formats/curl";
import { requestToFetch } from "./formats/fetch";

/**
 * Object of sample code generators. Add new sample code generators here!
 */
const CODE_SAMPLE_GENERATORS = {
  fetch: requestToFetch,
  curl: requestToCurl,
} as const;

/**
 * Types of sample code that can be generated
 */
export type CodeSampleType = keyof typeof CODE_SAMPLE_GENERATORS;

/**
 * Request body content types that are supported by the code generator.
 * Content types that aren't in this list will not be handled.
 */
export const SAMPLE_CODE_CONTENT_TYPES = [
  "application/json",
  "application/fhir+json",
  "application/x-www-form-urlencoded",
] as const;

/**
 * Type for request body content types that are supported by the code genreator.
 * Content types that aren't in this list will not be handled.
 */
export type SampleCodeContentType =
  | typeof SAMPLE_CODE_CONTENT_TYPES[number]
  | undefined;

/**
 * The standard format sample HTTP request expected by code generator tooling.
 *
 * Note the req.body parameter is expected to always be JSON, if present. Urlencoded bodies are parsed
 * from the JSON into whatever format is appropriate for the sample code.
 */
export interface SampleHTTPRequest {
  method?: string;
  url: string;
  headers?: Record<string, string>;
  body?: string;
}

/**
 * Accepts a simple HTTP request object and generates sample code for executing that request.
 * Currently supports generating 'fetch' (Node) and 'curl' (bash) generator types.
 */
export const sampleCodeForRequest = (
  req: SampleHTTPRequest,
  codeType: CodeSampleType
): string => {
  const generator = CODE_SAMPLE_GENERATORS[codeType];
  if (!generator) throw new Error(`Unknown sample code type: ${codeType}`);

  return generator(req);
};

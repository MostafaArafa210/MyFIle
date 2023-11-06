/**
 * Shared utilities for code sample generation.
 *
 * Functions in this file shouldn't be used outside the sampleCodeGenerator module.
 */
import {
  SampleHTTPRequest,
  SampleCodeContentType,
  SAMPLE_CODE_CONTENT_TYPES,
} from ".";
import { normalizeHeaders } from "../utilityFunctions";

/**
 * Looks up content-type from headers object in a case-insensitive way.
 * Does not return content-types that aren't in SAMPLE_CODE_CONTENT_TYPES.
 */
export function getContentType(req: SampleHTTPRequest): SampleCodeContentType {
  if (req.method === "GET") {
    return undefined;
  }
  const contentType = normalizeHeaders(req.headers ?? {})["content-type"];
  if (!SAMPLE_CODE_CONTENT_TYPES.includes(contentType as any)) {
    return undefined;
  }
  return contentType as SampleCodeContentType;
}

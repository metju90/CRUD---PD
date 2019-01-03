import { API_ROOT } from "../constants";

const commonHeaders = {
  "Content-Type": "text/plain",
  Accept: "text/plain"
};

export function fetchGet(endPoint) {
  const url = API_ROOT + endPoint;
  return fetch(url, {
    method: "GET",
    headers: {
      ...commonHeaders
    }
  });
}

export function fetchPost(endPoint, data) {
  const url = API_ROOT + endPoint;
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      ...commonHeaders
    }
  });
}

import http from "./httpService";

export function getOtp(data) {
  return http.post("user/get-otp", data).then(({ data }) => {
    return data.message;
  });
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => {
    return data.message;
  });
}

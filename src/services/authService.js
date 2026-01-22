// import Api from "../utils/Api";

// export const loginService = async ({ username, password }) => {
//   try {
//     const response = await Api.post("", {
//       username,
//       password,
//       id_daerah: 0,
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

import request from "../utils/api/axios";

export const login = (payload) => {
  return request("/ndi/pre-login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
};

const axios = require("../utils/axios");

module.exports = {
  getAll: async () => {
    const res = await axios.get("/");
    return res.data;
  },

  getById: async (id) => {
    const res = await axios.get(`/${id}`);
    return res.data;
  },

  create: async (data) => {
    const res = await axios.post("/", data);
    return res.data;
  },

  patch: async ({ id, ...data }) => {
    const res = await axios.patch(`/${id}`, data);
    return res.data;
  },

  deleteById: async (id) => {
    const res = await axios.delete(`/${id}`);
    return res.data;
  },

  deleteAll: async () => {
    await axios.delete("/");
  },
};

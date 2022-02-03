const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
   const key = `${process.env.API_KEY}`;
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${key}`,
         },
      };

      const response = await axios.get(
         "https://api.clashroyale.com/v1/clans/%232YRYJG/currentriverrace",
         config
      );

      res.json(response.data);
   } catch (error) {
      console.error(error, "f");
   }
});

module.exports = router;

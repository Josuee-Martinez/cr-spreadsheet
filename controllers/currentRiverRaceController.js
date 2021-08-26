const { Router } = require("express");
const axios = require("axios");
const router = Router();

router.get("/", async (req, res) => {
   try {
      const config = {
         headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
         },
      };

      const response = await axios.get(
         "https://api.clashroyale.com/v1/clans/%232YRYJG/currentriverrace",
         config
      );

      res.json(response.data);
   } catch (error) {
      console.error(error.message);
   }
});

module.exports = router;

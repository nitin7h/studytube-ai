import express from "express";
import { searchYouTube } from "../controller/youtube.js";
import { deepseekController } from "../controller/deepseek.js";
const router = express.Router();

router.get("/studytube/:searchData", async (req, res) => {
  const { searchData } = req.params;
  // console.log("searchData : ", searchData);

  const result = await searchYouTube(searchData);
  //   console.log("searchResult : ", searchResult);

  res.json({ result });
});

router.get("/studytube/ai/:chatData", (req, res) => {
  const { chatData } = req.params;
  // console.log("chatData : ", chatData);

  // const response = deepseekController(chatData);
  // res.status(200).json({response})
  res.json({ message: "i am working on it..." });
});

export default router;

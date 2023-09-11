const shortid = require("shortid");
const URL = require("../models/url");

const handleGenerateNewShortURL = async (req, res) => {
  const shortId = shortid();
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ error: "url is required" });
  }
  await URL.create({
    shortId: shortId,
    redirectURL: body.url,
    visitedHistory: [],
  });

  return res.json({ id: shortId });
};

const handleGetUrlById = async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitedHistory: {
          timestamp: Date.now(),
        },
      },
    },
  );
  if(entry && entry?.redirectURL){
    res.redirect(entry.redirectURL)
  }else{
    res.status(400).json({error:'URL not found'});
  }
};

const handleGetAnalytics = async (req,res)=>{
const shortId = req.params.shortId;
const result = await URL.findOne({shortId});
return res.json({totalClicks:result.visitHistory.length, analytics :result.analytics})

}

module.exports = { handleGenerateNewShortURL , handleGetUrlById, handleGetAnalytics};

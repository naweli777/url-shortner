const express= require("express");
const { handleGenerateNewShortURL,handleGetUrlById,handleGetAnalytics} = require("../controllers/url");
const router = express.Router();

router.get('/:shortId',handleGetUrlById)
router.post('/', handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleGetAnalytics)


module.exports = router;
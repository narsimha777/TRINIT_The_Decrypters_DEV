const tutorModel = require("../models/tutor");

async function gettut(req, res) {
    try {
        const query = {};
        if (req.query.pricing_low && req.query.pricing_high) {
            query['languages_known.trial_price'] = {
                $gte: parseInt(req.query.pricing_low),
                $lte: parseInt(req.query.pricing_high)
            };
        } else if (req.query.pricing_low) {
            query['languages_known.trial_price'] = { $gte: parseInt(req.query.pricing_low) };
        } else if (req.query.pricing_high) {
            query['languages_known.trial_price'] = { $lte: parseInt(req.query.pricing_high) };
        }
        if (req.query.language) {
            query['languages_known.name'] = req.query.language;
        }     
        if (req.query.level) {
            query['languages_known.level'] = req.query.level;
        }
        const tutors = await tutorModel.find(query);

        return res.status(200).json(tutors);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
}



module.exports={gettut};
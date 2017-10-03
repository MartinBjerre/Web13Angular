var mongoose = require('mongoose');
var fitnessplan = mongoose.model('fitnessplan');

module.exports.GetFitness = function (req, res) {
    // sendJsonResponse(res, 200, { "status": "success" });
    fitnessplan.find({},
        (err, fitnessplan) => {
        if (err) {
            sendJsonResponse(res,404,{"message": "Fitness not found"});
        }
        else{
            sendJsonResponse(res, 200, fitnessplan);
            }
        }
    );
};

//addfitnesss skal lige finde ud af hvordan den virker.
module.exports.fitnessApp = function (req, res) {
    //sendJsonResponse(res, 200, { "status": "success" });
    fitnessplan.create(
        {
            exercise: req.body.Exercise,
            description: req.body.Description,
            sets: req.body.Sets,
            repstime: req.body.Repstime
        },
        (err, fitnessplan2) =>
    {
        if (err)
        {
            sendJsonResponse(res,400,{"message": "Fitness not found"});
        }
        else {
            fitnessplan.find({},
            (err, fitnessplan) => {
            if (err) {
                sendJsonResponse(res,400,{"message": "Fitness not found"});
            } else {
                sendJsonResponse(res, 201, fitnessplan);
}
});
}
});


};
module.exports.GetOneFitness = function (req, res) {
    //sendJsonResponse(res, 200, { "status": "success" });
    if (req.params && req.params._id) {
        fitnessplan
            .findById(req.params._id)
            .exec(function (err, fitness) {
                if (!fitness) {
                    sendJsonResponse(res, 404, {
                        "message": "Fitnessid not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                sendJsonResponse(res, 200, fitness);
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No fitnessid in request"
        });
    }
};

module.exports.EditFitness = function (req, res) {
    //sendJsonResponse(res, 200, { "status": "success" });
    const fitID = req.params._id;
    if(fitID){
        sendJsonResponse(res,404,{"message" : "no id found, can't update"});
        return;
    }
    fitnessplan
        .findById(fitID)
        .select('-reviews - rating')
        .exec(
            function (err, fitness){
                if (!fitness){
                    sendJsonResponse(res,404, {"message": "fitness ID not found"});
                    return;
                }
                else if (err){
                    sendJsonResponse(res, 404, err);
                    return;
                }
                fitness.exercise = req.body.exercise;
                fitness.description = req.body.description;
                fitness.sets = req.body.sets;
                fitness.repstime = req.body.repstime;
                fitness.save(function (err, fitness) {
                    if (err) {
                        sendJsonResponse(res,404,err);
                    }
                    else{
                        sendJsonResponse(res, 404, fitness);
                    }
                });
            }
        );
};

module.exports.DeleteFitness = function (req, res) {
    //sendJsonResponse(res, 200, { "status": "success" });
    const fitId = req.params._id;
    if(fitId)
    {
        fitnessplan
            .findByIdAndRemove(fitId)
            .exec(
                function (err, fitness) {
                    if(err)
                    {
                        sendJsonResponse(res, 404, err);
                        return;
                    }
                    sendJsonResponse(res, 204, null);
                }
            );
    }
    else {
        sendJsonResponse(res, 404, {"message" : "no fitnessID"});
    }

};

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}
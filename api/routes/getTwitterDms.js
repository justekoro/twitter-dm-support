const umodel = require('../../db/models/users');

module.exports = (req, res) => {
    /*if (!req.session || !req.session.username) {
        res.status(401).send(
            {
                status: 401,
                message: "Please login to access this resource",
            }
        );
        return;
    }*/
    //umodel.findOne({ username: req.session.username })
        //.then(result => {
           // if (!result) {
             //   delete req.session.username;
            //   res.send(
              //      {
             //           status: 403,
            //            message: "Please relogin to access this resource.",
               //     }
          //      );
          //      return;
       //     }
            const t = require('../../twitter/twitClient');
            t.get("direct_messages/events/list", {}, (err, data) => {
                if (err) {
                    console.error(err);
                    res.send(
                        {
                            status: 500,
                            message: "Internal Server Error",
                        }
                    );
                }
                res.send(
                    {
                        status: 200,
                        message: data,
                    }
                );
            });
     //   })
     //   .catch(() => {
     //       res.send(
      //          {
        //            status: 500,
          //          message: "Internal Server Error",
            //    }
    //        );
      //  });
};
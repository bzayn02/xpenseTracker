import { getUser } from '../model/userModel/User.Model.js';

export const userAuth = async (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (authorization) {
            // check in db if user is valid
            const user = await getUser(authorization);
            console.log(user);
            return user?._id
                ? next()
                : res.status(403).json({
                      status: 'error',
                      message:
                          'You are not authorised to access the resource. ',
                  });
        }
        res.status(403).json({
            status: 'error',
            message: 'You are not authorised to access the resource. ',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 'error',
            message: 'You are not authorised to access the resource. ',
        });
    }
};

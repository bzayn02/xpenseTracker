import UserSchema from './User.Schema.js';

// Create User
export const createUser = (obj) => {
    return UserSchema(obj).save();
};
// Get User By ID
export const getUser = (_id) => {
    return UserSchema.findById(_id);
};
// Find User By any filter where filter must be an object
export const findUser = (filter) => {
    return UserSchema.findOne(filter);
};
// Update User
export const updateUser = (_id, obj) => {
    return UserSchema.findByIdAndUpdate(_id, obj);
};

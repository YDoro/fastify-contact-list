
const UserModel = require('./user.model');
module.exports = class User {

    static list = async (req, reply) => {
        const users = await UserModel.find()
        reply.send(
            users
        )
    }
    static create = async (req, reply) => {

        try {
            await UserModel.create({ ...req.body });
            reply.code(201).send();

        } catch (error) {
            reply.status(400).send(error)

        }

    }
    static update = async (req, reply) => {
        try {
            await UserModel.findByIdAndUpdate(req.params.id, { ...req.body });
            reply.code(200).send();
        } catch (error) {
            reply.status(400).send(error);
        }

    }
    static show = async (req, reply) => {
        try {
            const user = await UserModel.findById(req.params.id);
            reply.status(200).send(user);
        } catch (error) {
            reply.status(400).send(error);
        }
    }
    static delete = async (req, reply) => {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            reply.status(200).send();
        } catch (error) {
            reply.status(400).send(error);
        }
    }

}
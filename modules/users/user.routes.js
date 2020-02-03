const UserController = require('./user.controller');




module.exports = function (fastify, _, done) {
    fastify.addSchema({
        $id: 'user',
        type: "object",
        required: [],
        properties: {
            _id: {
                type: "string",
                example: "5e3825fa49eec82f35245bef",
                description: "the object id"
            },
            name: {
                type: "string",
                example: "Thor",
                description: "user's name"
            },
            email: {
                type: "string",
                example: "thor@odim.asg.ard",
                description: "user's email"
            },
            __v: {
                type: "number",
                example: "0",
                description: "object's database version"
            }
        }
    });
    const userSchema = {
        200: {
            $ref: 'user'
        }
    }
    const userList = {
        200: {
            type: "array",
            required: [],
            items: {
                $ref: 'user'
            }
        }
    }
    const inputCreateBodySchema = {
        type: "object",
        required: [],
        properties: {
            name: {
                type: "string",
                example: "thor odim son",
                description: "the name of the user that will be created"
            },
            email: {
                type: "string",
                example: "thor@odim.asg.ard",
                description: "an e-mail"
            },
            password: {
                type: "string",
                example: "someStrongPassword",
                description: "a password to login in the application"
            },
            phone: {
                type: "string",
                example: "11999999999",
                description: "the user phonenumber",
            },
            photo: {
                type: "string",
                example: " data:image/png;base64,iKuwWNfVlbUGwBrJ0CsnDYBoFSrlRNqY4vg4Dre...",
                description: "some picture to be used later"
            }
        }
    }
    const headersJsonSchema = {
        type: 'object',
        properties: {
            'Content-Type': { type: 'string' }
        },
        required: ['true']
    }
    //list users
    fastify.get('/', {
        schema: {
            response: userList
        }
    }, UserController.list);
    //create
    fastify.post('/', {
        schema: {
            body: inputCreateBodySchema,
            haders: headersJsonSchema,
        }
    }, UserController.create);
    fastify.patch('/:id', UserController.update);
    //show user
    fastify.get('/:id', {
        schema: {
            response: userSchema
        }
    }, UserController.show);
    fastify.delete('/:id', UserController.delete);
    done();
}
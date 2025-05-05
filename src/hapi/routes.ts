import Hapi, {
    ReqRefDefaults,
    Request,
    ResponseToolkit,
    ServerRoute,
} from "@hapi/hapi";

interface LoginPayload {
    username: string;
    password: string;
}

const routes: ServerRoute<ReqRefDefaults> | ServerRoute<ReqRefDefaults>[] = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello World";
        },
    },
    {
        method: "GET",
        path: "/about",
        handler: (request, h) => {
            return "About Page";
        },
    },
    {
        method: "GET",
        path: "/hello/{name?}",
        handler: (request, h) => {
            const { name = "Anon" } = request.params;
            const { lang } = request.query;
            if (lang == "id") {
                return `Hai, ${name}`;
            }

            return `Hello, ${name}`;
        },
    },
    {
        method: "POST",
        path: "/login",
        // options: {
        //     payload: {
        //         output: "data", // Return parsed payload as data
        //         parse: true, // Enable parsing
        //         allow: ["application/json"], // Explicitly allow JSON
        //         failAction: "error", // Throw error on parsing failure
        //         maxBytes: 1048576, // 1MB limit
        //     },
        // },
        handler: (request, h) => {
            console.log(request.payload);
            const { username, password } = request.payload as LoginPayload;
            console.log(username);
            return `Welcome ${username}`;
        },
    },
    {
        method: "*",
        path: "/{any*}",
        handler: (request, h) => {
            return "Halaman tidak ditemukan";
        },
    },
];

export default routes;

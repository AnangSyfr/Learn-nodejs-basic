import http, { type IncomingMessage, type ServerResponse } from "http";

// type acceptedUrl = "/" | "/about";
function requestListener(
    req: IncomingMessage,
    res: ServerResponse<IncomingMessage> & { req: IncomingMessage },
): void {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Powered-By", "Node JS");

    const { method, url } = req;

    if (url === "/") {
        if (method === "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: "Ini adalah home page" }));
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    message: `Halaman tidak dapat diakses dengan ${method} request`,
                }),
            );
        }
    } else if (url === "/about") {
        if (method === "GET") {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: "Ini adalah about" }));
        } else if (method === "POST") {
            let body: any = [];

            req.on("data", (chunk) => {
                body.push(chunk);
            });

            req.on("end", () => {
                if (body.length == 0) {
                    res.statusCode = 400;
                    res.end(
                        JSON.stringify({ message: "Body tidak boleh kosong" }),
                    );
                    return;
                }

                body = Buffer.concat(body).toString();

                const { name } = JSON.parse(body);
                res.statusCode = 200;
                res.end(
                    JSON.stringify({
                        message: `Hai ${name}! Ini adalah halaman about`,
                    }),
                );
            });
        } else {
            res.statusCode = 400;
            res.end(
                JSON.stringify({
                    message: `Halaman tidak dapat diakses dengan ${method} request`,
                }),
            );
        }
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Halaman tidak ditemukan" }));
    }
}

const server = http.createServer(requestListener);

const port = 5000;
const host = "localhost";
server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

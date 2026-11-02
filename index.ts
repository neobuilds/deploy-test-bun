const port = Number(process.env.PORT ?? 3000);

Bun.serve({
  port,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("hello from bun\n", { status: 200 });
    }
    return new Response("not found\n", { status: 404 });
  },
});

console.log(`bun listening on ${port}`);

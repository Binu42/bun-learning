const server = Bun.serve({
    port: 5000,
    fetch(req) {
        const url = new URL(req.url)

        if (url.pathname === '/') return new Response("HOME page")
        if (url.pathname === '/blog') return new Response("BLOG page")
        return new Response('404!')
    }
})

console.log(`server started at port ${server.port}`)
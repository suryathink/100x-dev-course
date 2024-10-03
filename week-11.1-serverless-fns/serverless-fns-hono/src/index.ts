import { Hono } from "hono";

const app = new Hono();

// Examples ->https://developers.cloudflare.com/workers/examples/

// this is how you define middleware
async function authMiddleware(c: any, next: any) {
  // c -> means context of this , it has both req, res object
  if (c.req.header("Authorization")) {
    // Do validation
    await next();
  } else {
    return c.text("You dont have access");
  }
}

// using middleware

app.get("/", authMiddleware, async (c) => {
  return c.json({
    message: "Hello Hono !,get request came",
  });
});

// c has both req and res
app.post("/", async (c) => {
  // body , headers, query parameters, middlewares, connecting to a database
  const body = await c.req.json();

  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.header("Content-type"));
  console.log(c.req.query("param"));

  return c.json({
    message: "Hello Hono!",
  });
});

export default app;

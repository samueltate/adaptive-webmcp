import assert from "node:assert/strict";
import test from "node:test";

test("renders Adaptive WebMCP metadata and portal content", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Adaptive WebMCP<\/title>/);
  assert.match(
    html,
    /Public-service websites that expose safe adaptive interface controls through WebMCP\./,
  );
  assert.match(html, /Carolina/);
  assert.match(html, /Department of Motor Vehicles/);
  assert.match(html, /Display options/);
});

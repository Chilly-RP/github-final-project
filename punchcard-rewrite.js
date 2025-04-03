// Quantumult X: script-request-body

let body = $request.body;

if (body) {
  let json = JSON.parse(body);
  json.x = "120.973685";
  json.y = "31.065265";
  $done({ body: JSON.stringify(json) });
} else {
  $done({});
}
import http from "http";

export default (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.write("Function endpoint: /api/user/subscribe");
  res.end();
};

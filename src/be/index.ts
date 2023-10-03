import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

const PORT = 8080;
const anotherPORT = 2000;
const app = express();
const anotherApp = express();
const appCSP = [
  "default-src 'self';",
  "img-src 'self' http://localhost:2000;",
  "script-src 'self' 'nonce-inlineScript' http://localhost:2000;",
  "frame-src 'self' data: http://localhost:2000;",
  "connect-src http://localhost:2000;",
].join(' ');
const anotherAppCSP = [
  "default-src 'self';",
  "img-src 'self';",
  "script-src 'self' 'nonce-inlineScript';",
  "frame-src 'self' http://localhost:2000;",
  // "frame-ancestors http://localhost:8080;",
].join(' ');
const anotherAppCorsOptions = {
  origin: [
    'http://localhost:8080',
    // 'null',
  ],
};

app.use(useCSP(appCSP));
app.use(express.static('./src/fe'));
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

anotherApp.use(cors(anotherAppCorsOptions));
anotherApp.use(useCSP(anotherAppCSP));
anotherApp.use(express.static('./src/fe/frame1'));
anotherApp.get('/', (req, res) => {res.send('Fetching succeed!');});
anotherApp.listen(anotherPORT);

function useCSP(CSP: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Content-Security-Policy', CSP);
    next();
  };
}

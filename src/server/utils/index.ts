import { pino } from "pino";
// import { tmpdir } from "os";
import { join } from "path";
import { cwd } from "process";
// import { PinoPretty } from "pino-pretty";
// import type { PrettyOptions } from "pino-pretty";

const file = join(cwd(), "logs", `${process.pid}-audit-logs`);

const transport = pino.transport({
  targets: [
    {
      level: "warn",
      target: "pino/file",
      options: {
        destination: file,
      },
      /*
  }, {
    level: 'info',
    target: 'pino-elasticsearch',
    options: {
      node: 'http://localhost:9200'
    }
    */
    },
    {
      level: "info",
      target: "pino-pretty",
    },
  ],
});

// const options: PrettyOptions = {
//   destination: file,
//   colorize: true,
// };

// Logger
// export const logger = pino(PinoPretty(options));
export const logger = pino(transport);

//
// Error handler
//
export interface ResponseError extends Error {
  status: number;
}

export function createError(status: number, message: string) {
  const err = new Error() as ResponseError;
  err.status = status;
  err.message = message;
  return err;
}

import {Injectable} from "@nestjs/common";


@Injectable()
export class LogsService {
    constructor() {};

    log(message, meta)
        {
        const { createLogger, format, transports } = require('winston');

        const logger = createLogger({
            level: 'info',
            exitOnError: false,
            format: format.json(),
            transports: [
                new transports.File({ filename: `logs/<test_param>.log` }),
            ],
        });

        let data = meta;
        data.message = message;

        const logFormat = format.combine(format.timestamp(), format.json());

        const info = logFormat.transform(data);

        console.log(data);

        return logger.info(info);

    };
}

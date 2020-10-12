import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const { createLogger, format, transports } = require('winston');

    const logger = createLogger({
      level: 'info',
      exitOnError: false,
      format: format.json(),
      transports: [
        new transports.File({ filename: `src/logs/<NOM_FICHIER>.log` }),
      ],
    });

    module.exports = logger;

// Exemple de logs
    logger.log('info', 'Voici un log simple');
    logger.info('Voici un log avec des métadonnées',{color: 'blue' });

    return this.appService.getHello();
  }
}

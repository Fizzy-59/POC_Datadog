import {Body, Controller, Get, Logger, Param, Post} from '@nestjs/common';
import {LogsService} from "../logs.service";


@Controller('cats')
export class CatsController
{
    constructor(private logsService: LogsService) {
    };

    @Get()
    findAll(): string {
        return 'This action returns all cats';
    }

    @Get('/:id')
    param(@Param() params): string {


        return `This action returns all cats with ${params.id}`;
    }

    @Post('/test')
    body(@Body() body): string {

        this.logsService.log('coucou', {param: body.chat});

        return `This action returns ${body.chat}`;
    }

}
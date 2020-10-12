import { Module } from '@nestjs/common';
import {CatsController} from "./cats.controller";
import {LogsService} from "../logs.service";


@Module({
    controllers: [CatsController],
    providers: [LogsService]
})
export class CatsModule {}
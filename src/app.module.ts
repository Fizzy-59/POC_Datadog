import { Module } from '@nestjs/common';

import {CatsModule} from "./cat/cats.module";

@Module({
  imports: [CatsModule]
})
export class AppModule {}

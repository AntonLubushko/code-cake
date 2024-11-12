import { Module } from '@nestjs/common';
import { TextProcessingModule } from './messages/text.processing.module';

@Module({
  imports: [TextProcessingModule],
})
export class AppModule {}

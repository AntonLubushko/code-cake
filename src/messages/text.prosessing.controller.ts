import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { TextProcessingService } from './text.processing.service';

@Controller()
export class TextProcessingController {
  constructor(private readonly textProcessingService: TextProcessingService) {}

  @Post('/process-text')
  processText(@Body('text') text: string) {
    if (!text) {
      throw new BadRequestException('Text is required');
    }

    const processedText = this.textProcessingService.simulateLangChain(text);
    return { processedText };
  }
}
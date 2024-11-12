import { Injectable } from '@nestjs/common';

@Injectable()
export class TextProcessingService {
  simulateLangChain(text: string): string {
    const responses = {
      launch: 'Preparing for launch. All systems go!',
      status: 'Status check: All systems are operational.',
      emergency: 'Emergency protocol activated!',
    };

    for (const [keyword, response] of Object.entries(responses)) {
      if (text.toLowerCase().includes(keyword)) {
        return response;
      }
    }
    return 'Command not recognized.';
  }
}

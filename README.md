## Description

This project is a simple API for managing the Starship space station, built using Node.js and NestJS. The main feature is the `/process-text` endpoint, which simulates command responses based on specific keywords in the text input.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

## Usage

Endpoint: /process-text
Method: POST
URL: localhost:3000/process-text

Request Format:
json
{ "text": "<command>" }

Response Format:
json
{ "processedText": "<response>" }

## Example Commands

The endpoint currently supports the following commands and responses:

"launch": Responds with "Preparing for launch. All systems go!"
"status": Responds with "Status check: All systems are operational."
"emergency": Responds with "Emergency protocol activated!"

## Error Handling

If a command is not recognized, the service will respond with an error message indicating that the command was not found,
either "Command not recognized" or "Bad request".

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

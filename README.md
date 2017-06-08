This is exaple of serverless lambda function that is written with typescript and supports offline, local development.

### Install

To install it (assuming you have serverless configured with AWS):

`yarn install`

### For local development:
> Note: add your database connection details to hello.ts before runing the example

`yarn build` - compile the project into the `dist` folder.
`yarn dev` - compile the project then use [serverless-offline](https://github.com/dherault/serverless-offline) to emulate the nodejs lambda execution environment so we can make HTTP requests locally.

Your lambda should be avaliable on `http://localhost:3000` - and example function: `http://localhost:3000/hello`

### For deployment:

`yarn deploy`


TODO (PR's are welcome!):
 - Make it testable and add test example
 - When webpack 2 support will be added to `serverless-webpack` - modify config file

# Swagger API for OpenStack Magnum 

As you will notice, we have allocated a separate directory per API resource to make maintaining and updating the Swagger docs easier. We then use `$ref` keywords to glue everything together.

In order to validate the Swagger, you must first _dereference_ the relative links into a single Swagger file, which can then be fed into a Swagger validator. To dereference, you will have to install an NPM package:

```bash
npm install swagger-parser@alpha
```

This will install the library to ``node_modules``. You can then run the dereference script like so:

```bash
node deref.js
```

This will compile all of the paths referenced by the ``swagger.json`` inside the current directory to a ``swaggerFull.js`` output file. You can then validate this by using a validator. My favourite is ``swagger-tools`` which you can use like so:

```bash
npm install -g swagger-tools
swagger-tools validate swaggerFull.js
```

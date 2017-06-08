import { Callback, Context } from 'aws-lambda';
import { Client } from 'pg';

export const hello = (event: any, context: Context, cb: Callback) => {

  // instantiate our pg client with connection details
  const client = new Client({
    user: 'your-username-here',
    password: 'your-password-here',
    database: 'your-database-here',
    host: 'abc.def.your-host.com',
    ssl: true
  });

  // connect to db
  client.connect(function (err) {
    if (err) throw err;

    const query = `
        select 
          *
        from 
          yout_table_name
        ;
        `;

    // execute a query on our database
    client.query(query, null, function (err, result) {
      if (err) throw err;

      // disconnect the client
      client.end(function (err) {
        if (err) throw err;
      });

      // call the lambda callback with our db data and event object
      cb(null,
        {
          dbResponse: result.rows,
          event
        }
      );

    });
  });
};

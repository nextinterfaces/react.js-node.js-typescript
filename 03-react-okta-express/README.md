
# React / Express Okta Sample

Start React app:

    $ npm start

Start Express server:

    $ nodemon express.js

Open

    - http://localhost:3000

Steps:

1. Click Login

    --> it will redirect to Okta

2. Sign in to Okta

    --> it will redirect back to http://localhost:3000 and will change from not authenticated to authenticated with [Logout button]

    --> Meanwhile React MessageList.js will make an Ajax call to Express http://localhost:3001/api/messages

    --> Express will validate the ticket to Okta, on success will return the data to MessageList

3. Logout from React will change the view to `Not Authenticated`

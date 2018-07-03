# Setup server-client connection schema

1. Client need to know, when server ready to go. Server emmits 'listening' event, when it's ready to accept connections.
   So, client listen server's 'listening' event to connect to the server.

2. After 'listening' event happens, client:

   - connects to the server;
   - starts listening messages from server with socket's 'data' event.

3. As soon as server gets connection - it emits 'connection' event and allows us to get client socket to setup back connection to the client:
   - listening socket's 'data' event from client;
   - writing some data back to the client.

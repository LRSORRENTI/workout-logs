# Workout Logs

going to build a workout logging app with next.js, bun.js, and sqlite

1. RUN 'sqlite3 workout.db' inside project directory
2. .fullschema to view current schemas

### NOTE the pages/api and all the logic in that folder was causing, and is still causing an error TypeError [ERR_INVALID_ARG_TYPE]: The "to" argument must be of type string. Received undefined, moving the api folder out of the pages directory, then placing it back inside makes things work temporarily, not 100% sure why, 'In a Next.js application, the pages/api directory is the conventional location for API routes, which are used to handle server-side logic, such as interacting with a database like SQLite. When you place your API route files inside the pages/api directory, Next.js automatically sets them up as serverless functions that can handle HTTP requests.' I'll have to see if once the data is actually hooked up the undefined error goes away

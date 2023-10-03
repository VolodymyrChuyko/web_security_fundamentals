# WEB SECURITY FUNDAMENTALS

Use
   - `npm run lint` to run ESlint check after code change

## How to use the stand

### To start
Use
   - `npm run stand` to start the stand in develop mode

or
   - `npm start` to build and start the stand

This will start two servers:
   - the first server (`Host-1`) is for hosting the page and iframes on port `8080`
   - the second server (`Host-2`) is for hosting an iframe on port `2000`

Open the page in browser and open Dev Tools to see console messages.

### Play with it
   - Check if the images hosted on `Host-1` and `Host-2` are displayed.
   - Try fetching data from the `Host-2` using external and inline scripts (use buttons on the page) and see the result in the console.
   - Play with iframe sandboxing parameters using buttons on the page.
   - Check if the images are still displayed and if data fetching works.
   - Go into the code and change the CSP parameter manually. You can edit the CSP parameters in the server code in src/be/index.ts and in HTML code in `<meta http-equiv="Content-Security-Policy">` tags.
   - Find Iframe #3 in the HTML code. Try different approaches for loading iframe content dynamically. Check which CSP restrictions are applied for each approach.

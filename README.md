## Test project(server)
Install python dependencies:
 ```bash
  pip install -r requirements.txt
 ```
 
Go to server folder and run server on [http://localhost:3000](http://localhost:3000):
 ```bash
  python index.py
 ```

 ## Test project(client)
 If you need to work on client side you neeed to install dependencies:
 ```bash
  npm i
 ```

 Then if you need to run dev-server run:
  ```bash
  npm start
 ```
 the webpage will auto-open on [http://localhost:8080](http://localhost:8080).

 If you need cook build you must run:
  ```bash
  npm run build
 ```

 then you must in folder '/dist' in 'index.html' change 'src="main.js"' to src="{{ url_for('static', filename='main.js') }}" and your build
 will work from your flask server.

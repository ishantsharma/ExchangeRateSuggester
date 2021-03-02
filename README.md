University:	San Jose State University <br>
Course:	Enterprise Software - CMPE172/Spring 2020<br>
Team Members: <br>
Abhinav Sarma<br>
Ishant Sharma<br>
Keshuv Bagaria<br>
Project Introduction:<br>
	In order to help our users to make a decision on whether or not they should exchange money, our application takes an average of the exchange rates between the two currencies for the past 30 days and compares that to the current exchange value. We display this data to the customer and also give our recommendations based on these numbers. 
	<br>
Sample Demo Screenshots:
<br>
![ScreenShot](https://user-images.githubusercontent.com/43163110/82136716-429a9580-97c5-11ea-971d-279c838aa359.png)
![ScreenShot](https://user-images.githubusercontent.com/43163110/82136718-45958600-97c5-11ea-9538-3520d566ae65.png)
![ScreenShot](https://user-images.githubusercontent.com/43163110/82136720-475f4980-97c5-11ea-9b4b-831bbc8af6e7.png)

Prerequisites for setup: <br>
List of required software to download: <br>
Docker<br>
Node.js<br>
	Setup Steps/Build Scripts:<br>
Node.js: run “npm install” in the folder where you save the node.js file. The set up will download the relevant dependencies to run the middleware. 
Maven Build for the Java code: Use command: “mvnw clean package” to create the jar file that would be used inside the Docker. This jar file will contain the java code to connect to the API and send data into the RDS database. The jar file is also attached to the project implementation canvas page. 
<br>
Docker: https://medium.com/@wkrzywiec/how-to-put-your-java-application-into-docker-container-5e0a02acdd6b
<br>
Use the following link to create a dockerfile and copy the jar file created in the previous step into the dockerfile. 
Instructions on how to run the project locally: 
<br>
	Refer to the DBConnection.json file that was attached in the Project Report. Save that file in the same folder as your ‘index.js’ (node module). Save the html file in the same folder as well. Then simply run that node file. “localhost:3000/exchangeRate” URL would display the webpage. 
Sequence Diagram:
![ScreenShot](https://user-images.githubusercontent.com/43163110/82136753-acb33a80-97c5-11ea-8171-7c7fd32d21d3.png)



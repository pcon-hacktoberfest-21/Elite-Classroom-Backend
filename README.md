# About the project
This is a backend project for the [Elite-Classroom](https://github.com/pcon-hacktoberfest-21/Elite-Classroom-Frontend) which is a similar to Google classroom, teachers can create classes and students can join them on the basis of class-codes. The teacher can also schedule the classes and post assignment and notes. The studend will have a certain time assigned by the teacher to complete the assignment. The application also allows the student to chat with the teacher. The students will also get a todo to keep track of there assignments.
## How to start the project?
#### Setup
- Create a .env file in the root folder
- Declare variables as mentioned in .env_samples
- create the database in your remote/localhost.The structure can be seen [here](https://i.ibb.co/z4b28L7/eliteclassroom-Db.png)
- you also need a servicesAccount connected with Google cloud for cloud storage. Follow the steps mentioned [here](https://firebase.google.com/support/guides/service-accounts)
- place the __serviceAccountKey.json__ in root folder
#### Next steps
- ```bash npm i```
- ```bash npm start``` to run the server
- ```bash npm run restart``` to run the development server.
- 
## Endpoints
- #### POST
    - ```/api/users/login```
        -     {
                "name": "user_name",
                "email": "user@email.com",
                "profile_pic": "photo link",
                "google_token": "1234567890"
                }
                    
    - ```/api/classrooms/newClassroom```
        -      {
                    "className": "Maths",
                    "google_token": "1234567890"
                }

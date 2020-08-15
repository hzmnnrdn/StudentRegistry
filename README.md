# StudentRegistry

## The Fateh
### Mohd Norhazmi Bin Nordin 1718909
### Mujib Mehran 1632625
### Afifi Syahmi Bin Kamal-Ludin 1710129

## Title: Student Registry Application

### Introduction
Sometimes finding groupmates manually in the class is problematic.  ‘Find my Group-mate’ is an app which gives the best solution for that and it’s a very convenient way to join a group and detect which group has empty slot and which group does not. In this app, there will be two types of user. One is the Group leader and the another type is group members. Group Leaders can generate QR code to join group and once the generated QR-code is scanned by the groupmates, automatically he will added to certain group based on the QR code that he/she scanned. The group members have to signup to create an account using email and password. After completing the signup, the user can change his email and password. In Home page he can see the available slots of the groups and pressing the join button, user will navigate to Scanning the QR-code page and once he scan the QR-code he will be added. The users will also get the notifications about the projects.

### Objective
* To ease the difficulty of find groupmates for the students.
* To help the group leaders to maintain the groups without any problem 


### Feature and Functionality
As our proposed mobile application is “Find My Group-partner”. We decided as a group to encounter a number of features and functionalities that are suitable for this type of mobile application.

#### Features:
1.	Simplicity: Our app is very simple and any user can use it without any instruction. Even the user has no need to type his contact number when he is joining a group. The system will automatically detect his contact number and will add it to the system. The user will input his name and matric number and scan. To generate the QR-code, the group leader will just navigate to QR-code generator page and generate and send this to group members. 
2.	Security: We are very concerned about the security issue and we are making the authentication system using firebase-authentication. This feature offers the maximum security of the user and there is no chance or the information to be leaked. To use the system, the user have to signup first to create and account using email and password. After that, using the email and password that he has registered, he can login to the App. 
3.	Flexibility: We offer maximum flexibility to the users who are using the mobile app. Once the user login using email and password, later he can change his password if he feels that he is not secured with that certain password. He can also change his previous email and update it to a new one. All he has to do is to write his current password and new password/email and press submit. Now, the user can login using the new password/email and no need to use the previous one anymore. 
4.	Notification: Sometimes he forgets about our group meeting and when is the submission of the project but a simple reminder can solve this issue. Using ‘Find my Group-partner’, the leader/teacher can send notifications to the users about the time of the project submission or when and where to meet for the group meeting. 

#### Functionality:
**API** There are many API that can be integrated into our mibile App project. But specifically, we chose contact API, notification API, React Native. Contact API is used for the student to get their contact number directly and saved for the other member references. Contact API ease the group leader or group members to get phone nu,ber of other member because tehir phone number is caught when theyregsiter in the group. Notification API is for the Admin to give toification on the application is case there are meeting or anty important notification. This API is veru useful when the Admin highlight on saomething.

**Error Checking** We use logic in error checking. Sometimes even when changing password or changing email, user might input wrong in either one of it and error chehcking is important to make sure it is corrrect. Erro checking is important as we want our application to be executed as what is supposed to do. So logic need to be handle carefully in order to make sure the application run correctly. This error checking can assure the authentication process to run correctly like to match the email and password.

**Components** As it is stated that react native component is a basic part in developing any type of mobile app.Also, it is divided in two main parts such container and presentational component.Hence, in our project the basic to include container such for states,props and function for make it work eventually.Here the container role as this application will ease the way for users and exhibition visitors by allowing them to register online and include their personal information , the users can be the participants who are in favour to show their poster on that day. Thus, the application will make the ability to provide an opportunity for researchers to interact and exchange ideas and also to promote international collaborative research and give the opportunity to exhibit research outputs at global level.Furthermore, where visitors will be able to register online,our application will solve common problem that most visitors are far away from the university location and can not register on exhibition time and that not acceptable if lead them to miss that day. However, for the appearance and styling of our mobile app we can include such any type of presentational component like UI toolkit or nativebase.To be clear, for enhancement of our project we will include these components to enable our functionality and objective is working as is planned.

**Firebase** Firebase is used for database system. The users details usch as email, password, phone number will be stored in the firebase. This is useful for the authentication preocess. To determine whether the user existing or not. Next, the user is allowed to enroll through the structure in the event that there is spot and, at that point it will be recorded that enlisted successfully.While in the event that it is full,it will show up for the user that it is full and can not be added.Lastly, we can said that the firebase is so valuable as will help us as the information stockpiling which bring about empowering enrollment dependent on the existent spots.

**Authentication** Authentication is important in any kind of application especially if the application use credentials to log in. So for security reasons, we use and include authentication function in our mobile application. In order to use the application, user need to sign up using their email and password and later they need to log in. This is easier if the student is already have an account. But if the student is new user, then he/she need to register first and their email will be stored in the firebase. If the student already have account, they can sign in and if their date is matching to the firebase, they can log in.


### Sequence Diagram
![Sequence diagram 1](https://github.com/hzmnnrdn/StudentRegistry/blob/master/Sequence%20diagram%201.png)
![Sequence diagram 2](https://github.com/hzmnnrdn/StudentRegistry/blob/master/Sequence%20diagram%202.png)

### References
- Student Registration and Enrollment Managemnet System. Retrieved from https://www.creatrixcampus.com/student-registration-enrollment
- React-Native Geolocation API. Retrieved from https://reactnative.dev/docs/geolocation.html
- React-Native Geolocation Github. Retrieved from https://github.com/react-native-community/react-native-geolocation
- React-Native Camera Github. Retrieved from https://react-native-community.github.io/react-native-camera/docs/rncamera
- React-Native Camera Tutorial. Retrieved from https://aboutreact.com/react-native-camera/
- Speech API expo. Retrieved from https://docs.expo.io/versions/latest/sdk/speech/
- LOcation API expo. Retrieved from https://docs.expo.io/versions/latest/sdk/location/
- Firebase doucmentation.Retrieved from https://firebase.google.com/


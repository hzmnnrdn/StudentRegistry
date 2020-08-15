# StudentRegistry

## The Fateh
### Mohd Norhazmi Bin Nordin 1718909
### Mujib Mehran 1632625
### Afifi Syahmi Bin Kamal-Ludin 1710129

## Title: Find My Group

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

**API**
**expo-contact** we have used expo contacts in our project to collect the user’s contact number from the mobile phone then we stored it to the database. We must save his own number in his mobile phone and this API will detect his contact number and take it while he is registering to the group

**react-native-qrcode** The group leader will generate the QRcode and using that QRcode the group members will join the group with their information. To generate the QRcode, we have used react-native-qrcode. When the leader write the group name and press generate, using this API, the QRcode generates using the group name.

**expo-notification** We have used expo-notification to send notification to the user. The teacher can send the notification to the user using this. Expo-Notification collects the token from the user’s mobile to send notification and using expo-notification-tool the notification can be sent to the user. 

**expo-Barcode-Scanner** Once the QRcode is generated, Expo-Barcode-Scanner is used to scan that QRcode. IT collects the hashed data from the QRcode and from that data the system understands in which group the user should join. 

**expo-permissions** The system accesses user’s camera and contacts and to get this access we need permission from the user. To get the permission, we have used expo-permissions. What will the App do if the user allows the system to access and what will the App do if the user does not allow the system to access, all of them are handled by expo-permissions. 


**Components**

**Presentational components:** Presentational components determine how a App should look. We have used **View** that supports layout with flexbox, style. We have used **Text** to display the text, **Image** to display images, **Button and TouchableOpacity** to interaction between other pages and actions, **TextInput** to take the input of the text from the user, **ActivityIndicator** to show a circular loading indicator and the app is loading to give better user experience, **QrCode** to display the generated Qrcode, **Stylesheet** to do the styling of the app.

**Container components:** We have used unsubscribeAuth in our homepage to make sure that no one can login the system without taken and we have fetched data and check the username. In our app, the username is email. Then we have collected the stored data from firebase and push the value to JSON to display the members in presentational component. In Join page, we have taken the contact number and then pushed name, matric no and contact-number to the database. To send notification, we have retrieved the token from mobile and send data to firebase. 

**Error Checking:** The error checking is essential for a app to determine how will it handle the errors. The App may crash if the error handling is not properly done. Errors occur when people engage with user interfaces. Sometimes, they happen because users make mistakes. The handle the errors, in SignUp screen when the user will write email and password which are not suitable to register to the app, it will show Alert and tell his to do it again. Once the user inputs email/password that are not registered to the App, it will show an Alert to write correct email/password. In update Password/Email page, it works also the same. 

**Authentication:** Security feature is important to run an app so that user feel safe to use the app. For authentication, we have used firebase. Firebase provides some good authentication features such as email/password, Phone, Google, Play Games, Game center, Facebook, Twitter, Github, Yahoo, Microsoft, Apple and Anonymous. Among them we have used firebase Email/Password for the authentication. SignUp,Login and Updating email and password are handled by this authentication. When the user register with a certain email and password, it is stored to the firebase authentication and when use try to login with that certain username and password, it authenticates and navigate to the homescreen. Once the user press signout it unsubscribe the login token and lead him back to the login page. User can also update his/her email and password and it also works the same. Once the user change his email/password, in firebase authentication the username/Password is updated.

**FireBase for data storage:** To store data, we have used firebase real-time database. We could use firebase cloud database which provides more space but in the database we need only to store the name, matricNo and Contact number and so we have used real-time database. All the information of the groupmembers are storing to the database and then retrieved from database and displays that who are in the group and who are not. Only when the user scans the correct Qrcode, he will be added to the firebase database and if he scans wrong Qrcode he will not be added. If the group is full and new member is added it will not display the new member. 

**UI Tool Kit:** We have used ‘React-native-paper’ as UI tool kit to design our app. From ‘React-Native-Paper’ we have used TextInput, Button, DefaultTheme and provider. It provides some graphical effects in the app and makes the app more user friendly.

### Screen Navigation
![Navigation](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/navigation.png)

### Sequence Diagram
![Sequence diagram 1](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/leader.png)
![Sequence diagram 2](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/member.png)

### ScreenShot
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/1.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/2.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/3.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/4.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/5.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/6.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/7.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/8.png)
![Screenshot](https://github.com/hzmnnrdn/StudentRegistry/blob/master/images/9.png)

### References
- Firebase doucmentation.Retrieved from https://firebase.google.com/
- Design navigation https://online.visual-paradigm.com/app/diagrams/#diagram:proj=0&type=MobileWireflow
- expo documentation from https://docs.expo.io/
- react native documentation retrieved from https://reactnative.dev/
- expo notification retrieved from https://docs.expo.io/versions/latest/sdk/notifications/
- expo barcode scanner retrieved from https://docs.expo.io/versions/latest/sdk/bar-code-scanner/
- react native qrcode generator retrieved from https://www.npmjs.com/package/react-native-qrcode-svg
- expo contact API retrieved from https://docs.expo.io/versions/latest/sdk/contacts/
- expo permission API retrieved from https://docs.expo.io/versions/latest/sdk/permissions/
- expo notication API retrieved from https://expo.io/notifications



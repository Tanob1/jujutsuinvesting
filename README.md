# Frontend restructured using Chakra. 

## To view the frontend clone the project
1. Clone the branch
### Run Front End
3. ```cd frontend```
4. ```npm install``` the dependencies
5. ```npm run dev``` start the project with vite
### Run Back end
6. ```cd ..``` go back to .
6. ```cd backend``` 
7. ```npm install``` the dependencies
8. ```npm start``` start the backend server

# Todo List/Time line
## Function to get Stock info
### Structure
```
 const characters = [
    { src:   'url to image', name: 'Name' , price: int, owned: int},
    { src:   'url to image', name: 'Name' , price: int, owned: int},
    ...
```
Would need to be connected to user cookies or sign in data!

## Function to get Acheavments info
```
let achievement_data = [
    { src: "url to image", achievementTitle: "STRONG RETURN", description: "Hold XX Gojo stock for atleast a week", isCompleted: true },
    { src: "url to image", achievementTitle: "But that's how losers think", description: "Hold XX Kashimo stock for atleast a week", isCompleted: false},
    ...
```
Would need to be connected to user cookies or sign in data!

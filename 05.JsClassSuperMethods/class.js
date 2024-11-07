
// Sahe ve perimetri hesabla

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     Sahe() {
//         return this.width * this.height;
//     }

//     Perimetr() {
//         return 2 * (this.width + this.height);
//     }
// }

// const newOne = new Rectangle(4, 20);

// const sahe = newOne.Sahe();
// console.log(sahe);

// const perimetr = newOne.Perimetr();
// console.log(perimetr)



// Bank Account

// class BankAccount {
//     constructor(accountNumber, balance = 0) {
//         this.accountNumber = accountNumber;  
//         this.balance = balance;  
//     }

//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Hesab ${this.accountNumber}: ${amount} məbləği əlavə olundu.`);
//         } else {
//             console.log("Xəta: Müsbət məbləğ əlavə etməlisiniz.");
//         }
//     }

//     withdraw(amount) {
//         if (amount <= 0) {
//             console.log("Xəta: Çıxarılacaq məbləğ müsbət olmalıdır.");
//         } else if (amount > this.balance) {
//             console.log("Xəta: Hesabda kifayət qədər vəsait yoxdur.");
//         } else {
//             this.balance -= amount;
//             console.log(`Hesab ${this.accountNumber}: ${amount} məbləği çıxarıldı.`);
//         }
//     }
// }

// const account101 = new BankAccount("101", 1000);

// const account102 = new BankAccount("102", 500);

// account101.deposit(500); 
// account101.withdraw(200);

// account102.withdraw(100); 
// account102.deposit(700); 


// console.log(account101.balance);
// console.log(account102.balance);


// Human class

// class Human {
//     constructor(name, surname, gender, nationality, username, email, isAdmin, password, bio, age) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.gender = gender;
//         this.nationality = nationality;
//         this.username = username;
//         this.email = email;
//         this.isAdmin = isAdmin || false;
//         this.isLogged = false;
//         this.password = password;
//         this.bio = bio;
//     }

//     getFullName() {
//         return `${this.name} ${this.surname}`;
//     }


//     getBirthYear() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.age;
//     }


//     changePassword(currentPassword, newPassword) {
//         if (currentPassword !== this.password) {
//             alert('Incorrect current password!');
//         } else if (currentPassword === newPassword) {
//             return 'new password and current password is the same';
//         } else {
//             this.password = newPassword;
//             alert('Password changed successfully');
//         }
//     }

//     changeEmail(users, newEmail) {
//         const userExists = users.some(user => user.email === newEmail);
//         if (userExists) {
//             alert('Email is already taken!');
//         } else {
//             this.email = newEmail;
//             alert('Email updated successfully');
//         }
//     }
// }






// function sortUsersByUsername(users) {
//     return users.sort((a, b) => a.username.localeCompare(b.username));
// }




// function filterByBirthYear(users, year) {
//     return users.filter(user => user.getBirthYear() > year);
// }




// function Login(users, username, password) {
//     const user = users.find(u => u.username === username);
//     if (!user) {
//         console.log('user not found!');
//     } else if (user.password !== password) {
//         console.log('incorrect username or password');
//     } else if (users.some(u => u.isLogged)) {
//         console.log('another user currently logged in');
//     } else {
//         user.isLogged = true;
//         alert('successfully logged in');
//     }
// }




// function LogOut(users, username) {
//     const user = users.find(u => u.username === username);
//     if (!user) {
//         console.log('user not found');
//     } else if (!user.isLogged) {
//         console.log('user did not logged in to log out!');
//     } else {
//         user.isLogged = false;
//         console.log('successfully logged out');
//     }
// }




// function CreateUser(users, user) {
//     users.push(user);
//     console.log('User created successfully');
// }



// function DeleteUser(users, username) {
//     const index = users.findIndex(user => user.username === username);
//     if (index === -1) {
//         console.log('user not found');
//     } else {
//         users.splice(index, 1);
//         console.log('User deleted successfully');
//     }
// }



// let users = [
//   new Human(
//     "John",
//     "Doe",
//     "Male",
//     "American",
//     "johndoe",
//     "john.doe@example.com",
//     false,
//     "password123",
//     "A bit about John.",
//     30
//   ),
//   new Human(
//     "Jane",
//     "Doe",
//     "Female",
//     "British",
//     "janedoe",
//     "jane.doe@example.com",
//     true,
//     "securepassword",
//     "Jane's bio goes here.",
//     28
//   ),
//   new Human(
//     "Alex",
//     "Smith",
//     "Non-binary",
//     "Canadian",
//     "alexsmith",
//     "alex.smith@example.com",
//     false,
//     "alexspassword",
//     "All about Alex.",
//     35
//   ),
//   new Human(
//     "Emily",
//     "Clark",
//     "Female",
//     "Australian",
//     "emilyclark",
//     "emily.clark@example.com",
//     false,
//     "emilyspassword",
//     "Explorer and photographer.",
//     26
//   ),
//   new Human(
//     "Michael",
//     "Brown",
//     "Male",
//     "German",
//     "michaelbrown",
//     "michael.brown@example.com",
//     true,
//     "michaelspass",
//     "Coffee enthusiast. Avid reader.",
//     32
//   ),
//   new Human(
//     "Luis",
//     "Gomez",
//     "Male",
//     "Spanish",
//     "luisgomez",
//     "luis.gomez@example.com",
//     false,
//     "luispassword",
//     "Music lover, Guitar player.",
//     29
//   ),
//   new Human(
//     "Sophia",
//     "Lopez",
//     "Female",
//     "Mexican",
//     "sophialopez",
//     "sophia.lopez@example.com",
//     true,
//     "sophiaspassword",
//     "Digital marketer and content creator.",
//     31
//   ),
// ];


// console.log(sortUsersByUsername(users));

// console.log(filterByBirthYear(users, 1990));

// Login(users, "johndoe", "password123"); 
// Login(users, "johndoe", "wrongpassword"); 
// Login(users, "nonexistentuser", "password123"); 


// LogOut(users, "johndoe"); 
// Login(users, "johndoe", "password123"); 
// LogOut(users, "johndoe"); 


// const newUser = new Human(
//   "Alice",
//   "Williams",
//   "Female",
//   "American",
//   "alicewilliams",
//   "alice.williams@example.com",
//   false,
//   "alicepass",
//   "A new user.",
//   26
// );
// CreateUser(users, newUser);
// console.log(users);

// DeleteUser(users, "johndoe");
// DeleteUser(users, "nonexistentuser"); 
// console.log(users);


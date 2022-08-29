export class User {
  id: number;
  username: String;
  password: String;




  constructor(id=0,username="JohnDoe123",password="John123"){
    this.id=id;
    this.username=username;
    this.password=password;
  }
}




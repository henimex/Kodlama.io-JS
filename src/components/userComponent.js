import UserService from "../services/userService.js";
import User from "../models/user.js";
import {FileLogger} from "../crossCuttingConcerns/logging/fileLogger.js";
import {ElasticLogger} from "../crossCuttingConcerns/logging/elasticLogger.js";

let userService = new UserService(new ElasticLogger());

let user1 = new User(1,"Joseph", "Henimex", "New York");
let user2 = new User(2,"Arnold", "Josh", "London");
let user3 = new User(3,"Danny", "Cittaer", "Moscow");
let user4 = new User(4,"Maria", "Pillow", "Las Vegas");

userService.add(user1);
userService.add(user2);
userService.add(user3);
userService.add(user4);
userService.getById(2);
console.log(userService.list());


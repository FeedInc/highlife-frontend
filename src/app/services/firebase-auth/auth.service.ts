import { Injectable } from '@angular/core';
import{ AngularFireAuth } from "@angular/fire/compat/auth";
import firebase from "firebase/compat/app";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private aFAuth:AngularFireAuth) {}

  async register(email: string, password: string){
    try{
      return await this.aFAuth.createUserWithEmailAndPassword(email,password);
    }catch(err){
      console.log("error en login: ",err);
      return null;
    }
  }

  async login(email:string, password:string){
    try{
      return await this.aFAuth.signInWithEmailAndPassword(email,password);
    }catch(err){
      console.log("error en login: ",err);
      return null;
    }
  }
  async loginWithGoogle(){
    try{
      return await this.aFAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.log("error en login con Google: ",err);
      return null;
    }
  }
  getUserLogged(){
    return this.aFAuth.authState;
  }
  logOut(){
    this.aFAuth.signOut().then();
  }

 }

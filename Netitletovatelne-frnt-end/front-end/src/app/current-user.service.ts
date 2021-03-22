import { Injectable } from '@angular/core';
import {User} from './Models/user';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user: User;

}

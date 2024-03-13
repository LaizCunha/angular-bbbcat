import { Injectable } from '@angular/core';
import { Cat } from './pages/participants/participants.page';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  constructor() { }

  addParticipant(participant: Cat): void {
    const catList: Cat[] = this.getParticipants();
    catList.push(participant);
    localStorage.setItem('participants', JSON.stringify(catList))
  }

  getParticipants(): Cat[] {
    const jsonParticipants = localStorage.getItem('participants');
    return jsonParticipants ? JSON.parse(jsonParticipants) : [];
  }

  clearParticipants(): void {
    localStorage.removeItem('participants');
}

}

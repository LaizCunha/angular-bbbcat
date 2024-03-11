import { Injectable } from '@angular/core';
import { Cat } from './pages/participants/participants.page';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private participants: Cat[] = [];

  constructor() { }

  addParticipant(participant: Cat) {
    this.participants.push(participant);
  }

  getParticipants() : Cat[] {
    return this.participants;
  }
}

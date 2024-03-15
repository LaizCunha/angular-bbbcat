import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { FormDataService } from 'src/app/form-data.service';

export interface Cat {
  nome: string;
  estado?: string;
  pelagem?: string;
  descricao?: string;
  castrado?: boolean;
}

@Component({
  selector: 'app-participants',
  templateUrl: './participants.page.html',
  styleUrls: ['./participants.page.scss'],
})
export class ParticipantsPage implements OnInit {

  public participants: Cat[];
  selectedParticipant: any;

  @ViewChild('participantModal') participantModal: IonModal | undefined;

  constructor(private formDataService: FormDataService) {
    this.participants = [];
  }

  ngOnInit() {
    this.participants = this.formDataService.getParticipants();
  }

  isEmpty(): boolean {
    return this.participants.length == 0
  }

  isFull(): boolean {
    return this.participants.length != 0
  }

  onClickRemoveItem(index: number) {
    if (index >= 0 && index < this.participants.length) {
      this.participants.splice(index, 1);
      localStorage.setItem('participants', JSON.stringify(this.participants));
    }
  }

  onClickClearParticipants() {
    this.formDataService.clearParticipants();
    this.participants = [];
  }

  openParticipantModal(participant: any) {
    this.selectedParticipant = participant;
    this.participantModal?.present();
  }

  closeParticipantModal() {
    this.selectedParticipant = null;
    this.participantModal?.dismiss();
  }

}

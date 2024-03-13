import { Component, OnInit } from '@angular/core';
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

  constructor(private formDataService: FormDataService) {
    this.participants = [];
  }

  ngOnInit() {
    this.participants = this.formDataService.getParticipants();
  }

  isEmpty(): boolean {
    return this.participants.length == 0
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormDataService } from 'src/app/form-data.service';
import { Cat } from '../participants/participants.page';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})

export class FormPage implements OnInit {


  public form?: FormGroup;

  public estados: string[] = ['Acre', 'Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins'];

  public pelagens: string[] = ['Branca', 'Laranja', 'Frajola', 'Siamês', 'Tricolor', 'Tigrado', 'Outro'];

  public initalValues: any;

  constructor(
    private formBuilder: FormBuilder,
    private formDataService: FormDataService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.createForm();
    this.initalValues = this.form?.value;
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(50)]],
      estado: [null, [Validators.required]],
      pelagem: [null, [Validators.required,]],
      descricao: ['', [Validators.required, Validators.maxLength(500)]],
      castrado: [false, [Validators.required]],
    });
  }

  async onClickSave() {
    if (this.form?.valid) {
      // Aqui você pode acessar os valores do formulário
      const nome = this.form.get('nome')?.value;
      const estado = this.form.get('estado')?.value;
      const pelagem = this.form.get('pelagem')?.value;
      const descricao = this.form.get('descricao')?.value;
      const castrado = this.form.get('castrado')?.value;

      const participant: Cat = {nome, estado, pelagem, descricao, castrado};
      this.formDataService.addParticipant(participant);

      // Limpa os campos do formulário
      this.form.reset(this.initalValues);

      // Exibe uma mensagem de sucesso
      const toast = await this.toastController.create({
        message: 'Participante salvo com sucesso!',
        duration: 5000,
        color: 'success'
      });
      toast.present();
    } else {
      // Exibe mensagem de erro
      const toast = await this.toastController.create({
        message: 'Erro ao preencher os campos do formulário.',
        duration: 5000,
        color: 'warning'
      });
      toast.present();
    }
  }


}

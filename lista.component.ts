import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Projeto } from '../models/projeto';
import { ProjetoService } from '../services/projeto.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
// Publics ---

projetosd?:  Projeto[] = [];
// References---
  modalRef?: BsModalRef;
  subscription!: Subscription;
  wthsize = 110;
  mostrarImagem: boolean= true;

  // Constructor
  constructor(private http: HttpClient, private projetoService: ProjetoService ,private route:ActivatedRoute, private modalService: BsModalService)
  {
     this.getProjeto();
   }

  //  Ngoninit - Start

  ngOnInit(): void {

  }
  //  Ngoninit - End

  public alterarImagem(){
    this.mostrarImagem = !this.mostrarImagem
  }

     getProjeto(){
     this.route.snapshot.paramMap.get('Tema');
     this.projetoService.getProjeto().subscribe((projetosd) => (this.projetosd = projetosd))
     }

    //  getProjeto(){
    //  const id = Number(this.route.snapshot.paramMap.get('Tema'));
    //  this.projetoService.getProjeto(id).subscribe((projeto) => (this.projetod = projeto))
    //   }
    //  console.warn("User Lote is", this.route.snapshot.paramMap.get('Lote'))
    //  this.Lote = this.route.snapshot.paramMap.get('Lote')


    // public get filtroLista(): string{
    //   return this._filtroLista;
    // }


}

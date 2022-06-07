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
  public projeto: string | null = '';
  public projetos: Projeto = {} as Projeto;
  public errorMessage: string | undefined;
  public projetod:Projeto[] = [];
  
  public projetoFiltrados: Projeto[] = [];
  public _filtroLista: string = '';

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
    this.route.paramMap.subscribe((param: ParamMap) => {
    this.projeto =  param.get('Tema')
    });

    this.projetoService.getProjeto().subscribe((data: Projeto[]) => {
   let projettos: Projeto[] = data;
   let Selectedprojetos =  projettos.find(projeto => projeto.Tema === this.projeto);
   if(Selectedprojetos){
    this.projetos = Selectedprojetos;
  }
  })
  }
  //  Ngoninit - End

  public alterarImagem(){
    this.mostrarImagem = !this.mostrarImagem
  }

     getProjeto(){
      this.route.snapshot.paramMap.get('Tema');
    this.projetoService.getProjeto().subscribe((projeto) => (this.projetod = projeto))
     }
    //  console.warn("User Lote is", this.route.snapshot.paramMap.get('Lote'))
    //  this.Lote = this.route.snapshot.paramMap.get('Lote')


    public get filtroLista(): string{
      return this._filtroLista;
    }


}

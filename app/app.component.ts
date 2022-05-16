import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  objectKeys = Object.keys;

  my_menu = {
    main1: ['sub1', 'sub2'],
    main2: ['sub1', 'sub2', 'sub3'],
  };

  public menus = [
    {
      menu: {
        id: 1,
        nome: 'Cadastros',
        url: null,
        ativo: true,
        estilo_icone: null,
        icone: null,
        submenus: [
          {
            id: 1,
            nome: 'Cadastro de usuários',
            url: '/usuarios',
            ativo: true,
            estilo_icone: null,
            icone: null,
          },
        ],
      },
    },
    {
      menu: {
        id: 1,
        nome: 'Estabelecimentos',
        url: null,
        ativo: true,
        estilo_icone: null,
        icone: null,
        submenus: [
          {
            id: 1,
            nome: 'Cadastro de Estabelecimentos',
            url: '/usuarios',
            ativo: true,
            estilo_icone: null,
            icone: null,
            submenus: [
              {
                id: 1,
                nome: 'Cadastro de Estabelecimentos Vinculados',
                url: '/usuarios',
                ativo: true,
                estilo_icone: null,
                icone: null,
                submenus: [
                  {
                    id: 1,
                    nome: 'Cadastro de Estabelecimentos Vinculados',
                    url: '/usuarios',
                    ativo: true,
                    estilo_icone: null,
                    icone: null,
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  ];
}

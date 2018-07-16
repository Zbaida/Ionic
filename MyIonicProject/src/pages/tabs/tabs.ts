import { Component } from '@angular/core';

import { NotesPage } from '../notes/notes';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotesPage;
  tab3Root = ProfilePage;

  constructor() {

  }
}

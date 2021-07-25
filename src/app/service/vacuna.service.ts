import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Vacuna } from '../models/vacuna';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {

  vacunasCollection!: AngularFirestoreCollection<Vacuna>;
  vacunas!: Observable<Vacuna[]>;
  vacunasDoc!: AngularFirestoreDocument<Vacuna>;
  

  constructor() { }
  getAllVacuna(){

  }
  getVacunaById(){
    
  }
}

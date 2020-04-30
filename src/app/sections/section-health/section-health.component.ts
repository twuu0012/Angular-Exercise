import { Component, OnInit } from '@angular/core';
import { Server } from '../../shared/server';


const SAMPLE_SERVERS: any[] = [
  { id: 1, name: 'dev', isOnline: true },
  { id: 2, name: 'staging', isOnline: false },
  { id: 3, name: 'prod', isOnline: true },
  { id: 4, name: 'mail', isOnline: false },
]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}

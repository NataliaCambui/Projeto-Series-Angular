import { ChangeDetectionStrategy, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { Serie } from '../../../shared/models/serie.model';
import { SerieService } from '../../../shared/services/serie.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DetalhesComponent } from '../detalhes/detalhes.component';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule, MatCardModule, FormsModule,],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class CardComponent implements OnInit {

  series: any
  serieSelecionada: Serie | any;

  constructor(
    public service: SerieService,
    public http: HttpClient,
    public changes: ChangeDetectorRef,
    public route: ActivatedRoute,
    public dialog: MatDialog,
  
  ) { }

  ngOnInit(): void {
    this.getAllSeries();
  }

  getAllSeries(): void {
    this.service.getSeries().subscribe(
      data => {
        this.series = data;
        this.changes.detectChanges();
        console.log(this.series);
      }
    );
  }

  openDialog(serie: Serie): void {
    this.serieSelecionada = serie;
    this.dialog.open(DetalhesComponent, {
      width: '400px',
      data:{serie:serie}
    });
  }
}
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, CUSTOM_ELEMENTS_SCHEMA, Inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { CardComponent } from '../card/card.component';
import { SerieService } from '../../../shared/services/serie.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-detalhes',
    standalone: true,
    imports: [
        CommonModule, MatCardModule, HttpClientModule, RouterModule,FormsModule,
    ],
    templateUrl: './detalhes.component.html',
    styleUrl: './detalhes.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetalhesComponent implements OnInit{

    constructor(
    public service: SerieService,
    public http: HttpClient,
    public changes: ChangeDetectorRef,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
    ){}
    
    ngOnInit(): void {
        this.data.serie
    }   
}

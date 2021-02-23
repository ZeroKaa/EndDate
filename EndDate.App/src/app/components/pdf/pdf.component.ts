import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { FileUploadValidators } from '@iplab/ngx-file-upload';
import { ICalculationOutput, IExtensionCalendarEvent } from '../../models/calculation.interface';
import { CalculationService } from '../../services/calculation.service';
import * as lodash from 'lodash';
import { DateService } from '../../services/date.service';
import { Session } from 'inspector';
import * as htmlToImage from 'html-to-image';
import * as jsPdf from 'jspdf';

@Component({
    selector: 'pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {


    public result: ICalculationOutput;


    constructor(
        private _router: Router,
        private _route: ActivatedRoute

    ) {

    }

    public async ngOnInit(): Promise<void> {
        if (sessionStorage.getItem('open_simulation')) {
            this.result = JSON.parse(sessionStorage.getItem('open_simulation'));
            //sessionStorage.removeItem('open_simulation');
        }
    }
     

    public async createPdf() {
        const filename = 'export.pdf';
        const node = document.getElementById('pdf');

        const pdf = new jsPdf.jsPDF('p', 'mm', 'a4');
        await pdf.html(node);
        pdf.setLineWidth(1);
        pdf.save(filename);

        //htmlToImage.toPng(node)
        //    .then((dataUrl) => {
        //        const img = new Image();
        //        img.src = dataUrl;
        //        const pdf = new jsPdf.jsPDF('p', 'mm', 'a4');
        //        pdf.setLineWidth(1);
        //        pdf.addImage(img, 'PNG', 0, 0, 208, 298);
        //        pdf.save(filename);
        //    })
        //    .catch((error) => {
        //        console.error('oops, something went wrong!', error);
        //    });
        
    }

}

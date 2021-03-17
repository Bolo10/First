import { Component, OnInit } from '@angular/core';

import { PreloadAllModules } from '@angular/router';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import {File} from '@ionic-native/file/ngx'
@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  status:string="";
  audiFile:MediaObject;
  constructor(private media: Media, private file: File) { }

  ngOnInit() {
  }
  RecordAudio(){
    this.audiFile = this.media.create(this.file.externalRootDirectory+'/audiofile.mp3') 
    this.audiFile.startRecord();
    this.status = "Grabando...!"
  }
  StopRecording(){
    this.audiFile.stopRecord();
    this.status = "Finalizado."
  }
}









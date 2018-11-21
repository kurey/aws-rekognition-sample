import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AwsService } from '../services/aws/aws.service';
import { Labels, Label } from 'aws-sdk/clients/rekognition';

@Component({
  selector: 'app-detect-labels',
  templateUrl: './detect-labels.component.html',
  styleUrls: ['./detect-labels.component.scss']
})
export class DetectLabelsComponent implements OnInit {

  @ViewChild('file_select')
  fileInput: ElementRef;

  /** 認識結果 */
  labels: Labels;

  /** 画像 */
  img;

  /** 通信中 */
  connecting: boolean;

  constructor(
    private aws: AwsService
  ) { }

  ngOnInit() {
  }

  /**
   * 画像選択ボタン押下
   */
  fileSelect() {
    this.fileInput.nativeElement.click();
  }

  /**
   * ファイル選択
   * @param files
   */
  onChangeFile(files: FileList) {
    const file = files[0];
    const binaryReader = new FileReader();  // バイナリ読み込み用
    const urlReader = new FileReader();     // プレビュー読み込み用

    binaryReader.onload = () => {
      this.detectLabels(binaryReader.result);
    };
    urlReader.onload = () => {
      this.img = urlReader.result;
    };
    
    binaryReader.readAsArrayBuffer(file);
    urlReader.readAsDataURL(file);
  }

  /**
   * 画像認識
   * @param img 画像データ
   */
  detectLabels(img) {
    this.connecting = true;
    new Promise((resolve, reject) => {
      this.aws.detectLabels(
        img,
        (response, error) => {
          if (error) {
            // エラー
            console.log(error);
            reject();
            return;
          }
          this.labels = response.Labels;
          resolve(this.labels);
        }
      )
    }).finally(() => this.connecting = false);
  }

  /**
   * ラベルの名前取得
   * @param label ラベル
   */
  getName(label: Label) {
    return label.Name;
  }

  /**
   * ラベルのスコア取得
   * @param label ラベル
   */
  getConfidence(label: Label) {
    // 少数第一位まで
    return Math.round(label.Confidence * 10) / 10;
  }
}

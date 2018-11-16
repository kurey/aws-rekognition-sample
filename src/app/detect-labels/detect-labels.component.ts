import { Component, OnInit } from '@angular/core';
import { AwsService } from '../services/aws.service';
import { Labels, Label } from 'aws-sdk/clients/rekognition';

@Component({
  selector: 'app-detect-labels',
  templateUrl: './detect-labels.component.html',
  styleUrls: ['./detect-labels.component.scss']
})
export class DetectLabelsComponent implements OnInit {

  labels: Labels;

  img;

  constructor(
    private aws: AwsService
  ) { }

  ngOnInit() {
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
    this.aws.detectLabels(img,
      (response, error) => {
        if (error) {
          // エラー
          console.log(error);
          return;
        }
        this.labels = response.Labels;
      }
    );
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
    return label.Confidence;
  }
}

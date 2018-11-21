import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() {
    // 初期化
    this.initializeAWS();
  }

  /**
   * AWSの設定
   */
  initializeAWS() {
    /** 
     * ！！注意！！
     * アクセスキー、シークレットキーは本来JSに直接書くのは大変危険です。
     * Rekognitionを利用する場合、サーバサイド側で連携するか
     * CognitoのUserPoolsを利用して認証を行うのがベターです。
     * 
     * くれぐれもJS側でアクセスキー、シークレットキーを管理しない様に注意しましょう！
     */
    AWS.config.update({
      accessKeyId: 'アクセスキー',
      secretAccessKey: 'シークレットキー',
      region: 'ap-northeast-1',
    });

    // RekognitionのAPIバージョン
    AWS.config.apiVersions = {
      rekognition: '2016-06-27',
    };
  }

  /**
   * 画像認識
   * @param image 画像のバイナリデータ
   * @param callback コールバック
   */
  detectLabels(
    image,
    callback?: (response: AWS.Rekognition.Types.DetectLabelsResponse, error: AWS.AWSError) => void
  ) {
    
    const rekognition = new AWS.Rekognition();
    // リクエストパラメータ
    const params: AWS.Rekognition.DetectLabelsRequest = {
      Image: {
        Bytes: image  // ブラウザ上で選択した画像ファイル
      }
    };
    // 画像認識リクエスト
    rekognition.detectLabels(params, (error, data) => {
      callback(data, error);
    });
  }

  /**
   * テキスト検出
   * @param image 
   * @param callback 
   */
  detectText(
    image,
    callback?: (response: AWS.Rekognition.Types.DetectTextResponse, error: AWS.AWSError) => void
  ) {
    const rekognition = new AWS.Rekognition();
    const params: AWS.Rekognition.DetectTextRequest = {
      Image: {
        Bytes: image
      }
    };
    // テキスト検出
    rekognition.detectText(params, (error, data) => {
      callback(data, error);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Angular, React, Vue, Framework, FrameworkId } from './framework.model';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class FrameWorksComponent implements OnInit {

  /** タイトル */
  title: string = 'Hello Angular!';

  /** フレームワークリスト */
  frameworks: Array<Framework> = [
    new Angular(),
    new React(),
    new Vue()
  ];

  /** 選択したフレームワーク */
  selectedFramework: Framework;

  constructor() { }

  ngOnInit() {
  }

  /**
   * 選択したフレームワークに対しての正解/不正解の結果を返却
   */
  correct(): string {
    switch (this.selectedFramework.id) {
      case FrameworkId.ANGULAR:
        return '大正解！';
      case FrameworkId.REACT:
      case FrameworkId.VUE:
        return '残念！今回利用しているフレームワークはAngularです！';
    }
  }

}
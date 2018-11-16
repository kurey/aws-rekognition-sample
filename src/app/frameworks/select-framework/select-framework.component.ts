import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Framework } from '../framework.model';

@Component({
  selector: 'app-select-framework',
  templateUrl: './select-framework.component.html',
  styleUrls: ['./select-framework.component.scss']
})
export class SelectFrameworkComponent implements OnInit {

  /** フレームワークのリスト */
  @Input() frameworks: Array<Framework>;

  /** 選択時のイベント */
  @Output() selected = new EventEmitter<Framework>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * クリック処理
   * @param framework 選択したフレームワーク
   */
  onClick(framework: Framework) {
    this.selected.emit(framework);
  }
}

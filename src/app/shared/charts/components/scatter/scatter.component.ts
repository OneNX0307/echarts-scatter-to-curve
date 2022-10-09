import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as echarts from 'echarts/core';
import {
  ScatterChart,
} from 'echarts/charts';
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TooltipComponent,
  GridComponent,
  // 数据集组件
  DatasetComponent,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent, DataZoomComponent, MarkLineComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import {ChartBuilder} from "../builders/chart-builder";
import {ECharts} from "echarts/core";
import {SeriesBuilder} from "../builders/series-builder";

@Component({
  selector: 'app-scatter',
  templateUrl: './scatter.component.html',
  styleUrls: ['./scatter.component.less']
})
export class ScatterComponent implements OnInit, AfterViewInit, OnDestroy {
  domId = 'chart';
  private chart: ECharts | undefined;
  @Input() width = 600;
  @Input() height = 600;
  constructor() { }

  ngOnInit(): void {
    // 注册必须的组件
    echarts.use([
      TitleComponent,
      TooltipComponent,
      GridComponent,
      DatasetComponent,
      TransformComponent,
      ScatterChart,
      LabelLayout,
      UniversalTransition,
      CanvasRenderer,
      DataZoomComponent,
      MarkLineComponent,
  ]);

  }

  ngAfterViewInit(): void {
    const data = this.prepareData();
    const series = new SeriesBuilder()
      .scatter(data)
      .build();
    this.chart = new ChartBuilder()
      .init(this.domId, this.width, this.height)
      .setTitle('')
      .setGrid()
      .setXAxis()
      .setYAxis()
      .setZoom()
      .setSeries(series)
      .build();
  }

  ngOnDestroy(): void {
    this.chart?.dispose();
  }

  private prepareData(): number[][] {
    const data = Array.from(new Array(618).keys()).map(key => [key / 100.0, Math.sin(key / 100.0)]);
    console.log(data);
    return data;
  }
}

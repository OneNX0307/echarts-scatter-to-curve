import * as echarts from 'echarts/core';
import {
  ScatterSeriesOption
} from 'echarts/charts';
import {
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponentOption,
  GridComponentOption,
  // 数据集组件
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  DataZoomComponentOption
} from 'echarts/components';
import {ECharts} from "echarts/core";

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | ScatterSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | DataZoomComponentOption
  >;

export class ChartBuilder {
  private chart: ECharts | undefined;
  private option: ECOption = {};

  public init(domId: string, width: number, height: number): ChartBuilder {
    const dom = document.getElementById(domId);
    if(!dom) return this;

    this.chart = echarts.init(dom, undefined, {width, height});
    return this;
  }

  public setTitle(title: string = ''): ChartBuilder {
    this.option.title = {
      text: title
    }
    return this;
  }

  public setGrid(): ChartBuilder {
    this.option.grid = {
      top: '5%',
      right: '5%',
      bottom: '5%',
      left: '5%'
    }
    return this;
  }

  public setZoom(): ChartBuilder {
    this.option.dataZoom = {
      startValue: 0,
      endValue: 6.18,
      type: "inside"
    }
    return this;
  }

  public setXAxis(): ChartBuilder {
    this.option.xAxis = {
      min: 0,
      max: 6.18
    }
    return this;
  }

  public setYAxis(): ChartBuilder {
    this.option.yAxis = {
      min: -1,
      max: 1
    }
    return this;
  }

  public setSeries(series: any[]): ChartBuilder {
    this.option.series = series;
    return this;
  }

  public build(): ECharts | undefined {
    this.chart?.setOption(this.option)
    return this.chart;
  }

}

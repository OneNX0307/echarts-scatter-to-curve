import {ScatterSeriesOption} from "echarts/charts";

export class SeriesBuilder {

  private series: any[] = [];

  public scatter(data: number[][]): SeriesBuilder {
    const scatter: ScatterSeriesOption = {
      name: 'scatter',
      type:'scatter',
      data: data,
      symbolSize: 2,
      markLine: {
        symbol: 'none',
        data: this.get(data),
        silent: true
      }
    }
    this.series.push(scatter);
    return this;
  }

  public build(): any[] {
    return this.series;
  }

  private get(data: number[][]) {
    const result: any[] = data.map((x, i) => [
      {
        coord: x,
        lineStyle: {
          type: 'solid',
          width: 2,
        }
      },
      {
        coord: data[i+1],
        lineStyle: {
          type: 'solid',
          width: 2,
        }
      }
    ])
    return result;
  }
}

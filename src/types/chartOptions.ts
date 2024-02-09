export interface ChartOptions {
    chart: {
      type: string;
      plotShadow: boolean;
    };
    title: {
      text: string;
      floating: boolean;
      verticalAlign: string;
      y: number;
      style: {
        fontSize: string;
        fontWeight: string;
      };
    };
    subtitle: {
      text: string;
      floating: boolean;
      verticalAlign: string;
      y: number;
      style: {
        fontSize: string;
        fontWeight: string;
      };
    };
    legend: {
      enabled: boolean;
    };
    credits: {
      enabled: boolean;
    };
    plotOptions: {
      pie: {
        innerSize: string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        slicedOffset: number;
        dataLabels: {
          connectorWidth: number;
          enabled: boolean;
        };
        states: {
          hover: {
            enabled: boolean;
          };
        };
      };
    };
    series: Highcharts.SeriesOptionsType[];
  }
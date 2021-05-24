import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outPutTarget: OutputTarget) {}

  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outPutTarget.print(output);
  }
}

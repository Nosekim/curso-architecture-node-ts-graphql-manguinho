import { LastRankingLoader } from "../../domain/usecases";
import { Controller, HttpResponse, ok, serverError } from "../contracts";
import { RankingScoreViewModel } from "../view-models/ranking-score";

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    try {
      const ranking = await this.lastRankingLoader.load();
      return ok(RankingScoreViewModel.mapCollection(ranking));
    } catch (error: any) {
      return serverError(error);
    }
  }
}

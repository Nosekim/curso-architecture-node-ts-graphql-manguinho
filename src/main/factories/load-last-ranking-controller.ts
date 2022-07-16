import { LastRankingLoaderService } from "../../data/service";
import { FakeRankingRepository } from "../../infra/repositories";
import { LoadLastRankingController } from "../../presentation/controllers";

export const makeLoadLastRankkingController = () => {
  const repo = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repo);
  const controller = new LoadLastRankingController(loader);
  return controller;
};

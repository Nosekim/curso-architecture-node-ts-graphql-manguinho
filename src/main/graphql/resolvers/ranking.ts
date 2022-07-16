import { adaptResolver } from "./../../adapters";
import { makeLoadLastRankkingController } from "./../../factories";

export default {
  Query: {
    lastRanking: async (): Promise<any> =>
      adaptResolver(makeLoadLastRankkingController()),
  },
};

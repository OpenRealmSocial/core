import { Factories } from "./factories";
import { makeVerificationEthAddressClaim } from "./verifications";

describe("makeVerificationEthAddressClaim", () => {
  test("succeeds", () => {
    const qid = Factories.Qid.build();
    const ethAddress = Factories.EthAddress.build();
    const network = Factories.OpenrealmNetwork.build();
    const blockHash = Factories.BlockHash.build();
    const claim = makeVerificationEthAddressClaim(qid, ethAddress, network, blockHash);
    expect(claim.isOk()).toBeTruthy();
  });
});

import { OpenrealmNetwork } from "./protobufs";
import { err, ok } from "neverthrow";
import { bytesToHexString } from "./bytes";
import { HubResult } from "./errors";
import { validateEthAddress, validateEthBlockHash } from "./validations";

export type VerificationEthAddressClaim = {
  qid: bigint;
  address: `0x${string}`;
  network: OpenrealmNetwork;
  blockHash: `0x${string}`;
};

export const makeVerificationEthAddressClaim = (
  qid: number,
  ethAddress: Uint8Array,
  network: OpenrealmNetwork,
  blockHash: Uint8Array,
): HubResult<VerificationEthAddressClaim> => {
  const ethAddressHex = validateEthAddress(ethAddress).andThen((validatedEthAddress) =>
    bytesToHexString(validatedEthAddress),
  );
  if (ethAddressHex.isErr()) {
    return err(ethAddressHex.error);
  }

  const blockHashHex = validateEthBlockHash(blockHash).andThen((validatedBlockHash) =>
    bytesToHexString(validatedBlockHash),
  );
  if (blockHashHex.isErr()) {
    return err(blockHashHex.error);
  }

  return ok({
    qid: BigInt(qid),
    address: ethAddressHex.value,
    network: network,
    blockHash: blockHashHex.value,
  });
};

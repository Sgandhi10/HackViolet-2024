import path from "path";
import { init, emulator, deployContractByName } from "@onflow/flow-js-testing";

const main = async () => {
  const basePath = path.resolve(__dirname, "../cadence");

  await init(basePath);
  await emulator.start();

  // We will deploy our contract to the address that corresponds to "Alice" alias
  const to = await getAccountAddress("Alice");

  // We assume there is a file on "../cadence/contracts/Wallet.cdc" path
  const name = "Wallet";

  // Arguments will be processed and type matched in the same order as they are specified
  // inside of a contract template
  const args = [1337, "Hello", { name: "Alice" }];

  const [deploymentResult, err] = await deployContractByName({ to, name });
  console.log({ deploymentResult }, { err });
  }

  await emulator.stop();
};

main();
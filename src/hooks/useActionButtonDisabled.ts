import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useAppSelector } from "./storage";
import { useTonAddress } from "@tonconnect/ui-react";
import { useWallet } from "@solana/wallet-adapter-react";

export type TParentType = "bridge" | "swap";

export default function useActionButtonDiabled(parent: TParentType) {
  const { isConnected } = useAccount();
  const tonAddress = useTonAddress();
  const solanaWallet = useWallet();

  const bridge = useAppSelector((state) => state.bridge);
  const swap = useAppSelector((state) => state.swap);
  const slice = parent == "bridge" ? bridge : swap;

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (isConnected || tonAddress || solanaWallet.publicKey) {
      // has amount?
      if (Number(bridge.amount) <= 0) {
        setIsDisabled(true);
      }
    } else {
      setIsDisabled(false);
    }
  }, [isConnected, slice.amount, tonAddress, solanaWallet.publicKey]);

  return isDisabled;
}

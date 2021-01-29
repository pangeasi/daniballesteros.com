import { useRouter } from "next/router";
export const useIsHeader = () => {
  const { pathname } = useRouter();
  return pathname === "/";
};

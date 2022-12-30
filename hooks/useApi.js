import { useMemo, useState } from 'react';
import { brokenId, getTestContract, workingId } from '../lib/test-warp-contract';
import { buildWarp } from '../lib/warp';

export function useApi() {
  const [isLoading, setLoading] = useState(true);
  const [api, setApi] = useState(null);

  useMemo(() => {
    initApis()
  }, []);

  async function initApis() {
    const { warp } = await buildWarp();

    setApi({
      badContract: await getTestContract(warp, brokenId),
      workingContract: await getTestContract(warp, workingId),
    })

    setLoading(false);
  }

  return { isLoading, api }
}